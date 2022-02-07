import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { v4 as uuidv4 } from 'uuid';
import { User } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor (
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      agreement: new FormControl('', [Validators.required])
    }, { validators: this.passwordsMatch })
  }

  passwordsMatch (control: AbstractControl): ValidationErrors | null {
    const password = control?.get('password')?.value;
    const passwordConfirm = control?.get('confirmPassword')?.value;
    return ((password && passwordConfirm )&& (password === passwordConfirm))? null : { passwordsNotMatching: true };
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.snackBar.open("Invalid value form!", '', {
        duration: 5000
      });
    } else {
      this.authService.register(new User(uuidv4(), this.registerForm.value, new Date(), this.registerForm.value.password, 'assets/images/default.png'));
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
