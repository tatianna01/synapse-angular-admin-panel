import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthActions } from 'src/app/store/actions/auth.actions';
import { ProductsStateModel } from 'src/app/store/state/products.state';
import { Notifications } from 'src/app/store/state/auth.state';


export const USER_ID = 'userId';
export const REGISTERED_USER = 'registered-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router, 
    private store$: Store<ProductsStateModel>,
    private snackBar: MatSnackBar
  ) { }

  login(user: User): void {
    this.logoutFromLocalStorage();
    this.store$.dispatch(AuthActions.login({ user }));
    localStorage.setItem(USER_ID, user.id);
    this.router.navigate(['app/dashboard']);
  }

  getLoggedInUserId(): string {
    return localStorage.getItem(USER_ID);
  }

  logout(): void {
    this.logoutFromLocalStorage();
    this.router.navigate(['auth/login']);
  }

  logoutFromLocalStorage(): void {
    localStorage.removeItem(USER_ID);
    localStorage.removeItem(REGISTERED_USER);
  }

  isAuthenticated(): boolean {
    const id = localStorage.getItem(USER_ID);
    return !!id;
  }

  isRegistered(): boolean {
    const user = localStorage.getItem(REGISTERED_USER);
    return !!user;
  }

  pushRegisteredUserToStore(): void {
    const user = this.getRegisteredUser();
    this.store$.dispatch(AuthActions.register({ user }));
  }

  register(user: User): void {
    this.logoutFromLocalStorage();
    this.store$.dispatch(AuthActions.register({ user }));
    localStorage.setItem(REGISTERED_USER, JSON.stringify(user));
    localStorage.setItem(USER_ID, user.id);
    this.router.navigate(['app/dashboard']);
  }

  getRegisteredUser(): User {
    return JSON.parse(localStorage.getItem(REGISTERED_USER));
  }

  updateUser(user: User): void {
    this.store$.dispatch(AuthActions.updateUser({user}));
    this.snackBar.open("User is successfully updated!", '', {
      duration: 5000
    });
    this.router.navigate(['app/users']);
  }

  updateProfile(user: User): void {
    this.store$.dispatch(AuthActions.updateUser({user}));
    this.snackBar.open("Your profile is successfully updated!", '', {
      duration: 5000
    });
  }

  createUser(user: User): void {
    this.store$.dispatch(AuthActions.createUser({user}));
    this.snackBar.open("User is successfully created!", '', {
      duration: 5000
    });
    this.router.navigate(['app/users']);
  }

  updateNotifications(notifications: Notifications): void {
    this.store$.dispatch(AuthActions.updateNotifications({notifications}));
    this.snackBar.open("Notifications are successfully updated!", '', {
      duration: 5000
    });
  }

  changeIcon(icon: any, id: string) {
    this.store$.dispatch(AuthActions.changeIcon({icon, id}));
    this.snackBar.open("Your profile image is successfully changed!", '', {
      duration: 5000
    });
  }

  removeIcon(id: string){
    this.store$.dispatch(AuthActions.removeIcon({id}));
    this.snackBar.open("Your profile image is successfully deleted", '', {
      duration: 5000
    });
  }
}
