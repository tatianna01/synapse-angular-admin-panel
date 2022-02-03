import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required]),
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
    // if (this.registerForm.invalid){
    //   alert('Invalid value form!');
    // } else {
    //   this.authService.register(this.registerForm.value).pipe(
    //     map(user => this.router.navigate(['login'])),
    //     takeUntil(this.destroy$)
    //   ).subscribe();
    // }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

}
