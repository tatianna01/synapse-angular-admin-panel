import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { usersSelector } from 'src/app/store/selectors/auth.selector';
import { AuthStateModel } from 'src/app/store/state/auth.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup;
  
  users$: Observable<User[]> = this.store$.pipe(select(usersSelector))
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private authService: AuthService,
    private store$: Store<AuthStateModel>,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(): void {
    this.users$.pipe(takeUntil(this.destroy$)).subscribe((users) => {
      users.forEach(user => {
        if (user.email === this.loginForm.value.email && this.loginForm.value.password === user.password) {
          this.authService.login(user);
        }
      }) 
      !this.authService.isAuthenticated() && this.snackBar.open("This user doesn't exist!", '', {duration: 5000});
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
