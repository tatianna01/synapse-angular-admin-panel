import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthActions } from 'src/app/store/actions/auth.actions';
import { usersSelector } from 'src/app/store/selectors/auth.selector';
import { ProductsStateModel } from 'src/app/store/state/products.state';
import { v4 as uuidv4 } from 'uuid';
import { Notifications } from 'src/app/store/state/auth.state';


export const USER_ID = 'userId';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users$: Observable<User[]> = this.store$.pipe(select(usersSelector))

  constructor(
    private router: Router, 
    private store$: Store<ProductsStateModel>,
    private snackBar: MatSnackBar
  ) { }

  login(res: User): void {
    this.users$.subscribe((users) => {
      users.forEach(user => {
        if (user.email === res.email && res.password === user.password) {
          this.store$.dispatch(AuthActions.login({ user }));
          localStorage.setItem(USER_ID, user.id);
          this.router.navigate(['app/dashboard']);
        }
      }) 
      !this.isAuthenticated() && this.snackBar.open("This user doesn't exist!", '', {duration: 5000});
    })
  }

  getLoggedInUserId(): string {
    return localStorage.getItem(USER_ID);
  }

  logout(): void {
    this.store$.dispatch(AuthActions.logout());
    localStorage.removeItem(USER_ID);
    this.router.navigate(['auth/login']);
  }

  isAuthenticated(): boolean {
    const id = localStorage.getItem(USER_ID);
    return !!id;
  }

  register(user: User): void {
    this.store$.dispatch(AuthActions.register({ user }));
    this.router.navigate(['auth/login']);
  }

  updateUser(user: User): void {
    this.store$.dispatch(AuthActions.updateUser({user}));
    this.snackBar.open("User is successfully updated!", '', {
      duration: 5000
    });
  }

  createUser(user: User): void {
    this.store$.dispatch(AuthActions.createUser({user}));
    this.snackBar.open("User is successfully created!", '', {
      duration: 5000
    });
  }

  updateNotifications(notifications: Notifications): void {
    this.store$.dispatch(AuthActions.updateNotifications({notifications}));
    this.snackBar.open("Notifications are successfully updated!", '', {
      duration: 5000
    });
  }

  changeIcon(icon: string, id: string){
    this.store$.dispatch(AuthActions.changeIcon({icon, id}))
  }

  removeIcon(icon: string, id: string){
    this.store$.dispatch(AuthActions.removeIcon({icon, id}))
  }
}
