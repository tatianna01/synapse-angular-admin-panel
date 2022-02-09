import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Constants, PHONE_REGEX } from 'src/app/constants/constants';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { notificationsSelector, usersSelector } from 'src/app/store/selectors/auth.selector';
import { AuthStateModel, Notifications } from 'src/app/store/state/auth.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  readonly constants: typeof Constants = Constants;

  profileForm: FormGroup;
  notificationsForm: FormGroup;
  profile: User;

  users$: Observable<User[]> = this.store$.pipe(select(usersSelector))
  notifications$: Observable<Notifications> = this.store$.pipe(select(notificationsSelector))
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private store$: Store<AuthStateModel>,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(Constants.PHONE_LENGTH), Validators.pattern(PHONE_REGEX)]),
      country: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required])
    })
    this.notificationsForm = new FormGroup({
      emailNotifications: new FormControl(''),
      pushNotifications: new FormControl(''),
      textMessages: new FormControl(''),
      phoneCalls: new FormControl(''),
      messagesEmailNotifications: new FormControl(''),
      messagesPushNotifications: new FormControl(''),
      messagesTextMessages: new FormControl('')
    })

    this.notifications$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.notificationsForm.patchValue(res);
    })

    this.users$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.profile = res.find((user) => user.id === this.authService.getLoggedInUserId());
      this.profileForm.patchValue(this.profile);
    })
  }

  saveNotifications(): void {
    this.authService.updateNotifications(this.notificationsForm.value);
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        this.authService.changeIcon(event.target.result, this.profile.id);
      }
    }
  }

  onRemoveIcon(): void {
    this.authService.removeIcon(this.profile.id);
  }

  onSaveSettings(): void {
    this.authService.updateProfile(new User(this.profile.id, this.profileForm.value, this.profile.createdAt, this.profile.password, this.profile.icon, this.profile.nickname));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
