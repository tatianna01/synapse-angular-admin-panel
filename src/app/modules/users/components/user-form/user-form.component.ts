import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { usersSelector } from 'src/app/store/selectors/auth.selector';
import { AuthStateModel } from 'src/app/store/state/auth.state';
import { v4 as uuidv4 } from 'uuid';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Constants, PHONE_REGEX } from 'src/app/constants/constants';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit, OnDestroy {

  readonly constants: typeof Constants = Constants;

  userForm: FormGroup;
  userId: string;
  user: User;
  users$: Observable<User[]> = this.store$.pipe(select(usersSelector))
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private store$: Store<AuthStateModel>,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl(''),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      nickname: new FormControl('', [Validators.minLength(6)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(Constants.PHONE_LENGTH), Validators.pattern(PHONE_REGEX)]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    })

    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe((params: Params) => {
      this.userId = params.id;
      this.users$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
        this.user = res.find((user) => user.id === this.userId);
        this.userForm.patchValue(this.user);
      })
    });
  }

  onSubmit(): void {
    this.userId ? this.authService.updateUser(new User(this.userForm.value.id, this.userForm.value, this.user.createdAt, this.user.password, this.user.icon, this.userForm.value.nickname))
    : this.authService.createUser(new User(uuidv4(), this.userForm.value, new Date(), '', 'assets/images/default.png', this.userForm.value.nickname));
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
