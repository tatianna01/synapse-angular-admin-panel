import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { loggedInUserSelector, notificationsSelector, stateSelector, usersSelector } from 'src/app/store/selectors/auth.selector';
import { AuthStateModel, Notifications } from 'src/app/store/state/auth.state';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  profileForm: FormGroup;
  notificationsForm: FormGroup;
  profile: User;
  selectedFile:any = null;

  users$: Observable<User[]> = this.store$.pipe(select(usersSelector))
  loggedInUserSelector$: Observable<User> = this.store$.pipe(select(loggedInUserSelector))
  notifications$: Observable<Notifications> = this.store$.pipe(select(notificationsSelector))
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private store$: Store<AuthStateModel>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phoneNumber: new FormControl(''),
      country: new FormControl(''),
      city: new FormControl('')
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
    this.selectedFile = event.target.files[0].name;
    this.authService.changeIcon(this.selectedFile, this.profile.id);
  }

  onRemoveIcon(): void {
    this.authService.removeIcon(this.selectedFile, this.profile.id);
  }

  onSaveSettings(): void {
    this.authService.updateUser(new User(this.profile.id, this.profileForm.value, this.profile.createdAt, this.profile.password, this.profile.icon));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
