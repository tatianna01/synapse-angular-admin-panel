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

  login(user: User): void {
    this.users$.subscribe((users) => {
      if(users.find((res) => user.email === res.email && user.password === res.password)) {
        this.store$.dispatch(AuthActions.login({ user }));
        this.router.navigate(['app/dashboard']);
      } else {
        this.snackBar.open("This user doesn't exist!", '', {
          duration: 5000
        });
      }
    })
  }

  register(value: any): void {
    const user = new User(uuidv4(), value, new Date(), value.password, 'assets/images/default.png');
    this.store$.dispatch(AuthActions.register({ user }));
    this.router.navigate(['app/dashboard']);
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
}
