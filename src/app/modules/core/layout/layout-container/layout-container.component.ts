import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { usersSelector } from 'src/app/store/selectors/auth.selector';
import { AuthStateModel } from 'src/app/store/state/auth.state';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss']
})
export class LayoutContainerComponent implements OnInit, OnDestroy {

  users$: Observable<User[]> = this.store$.pipe(select(usersSelector));
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor (
    private authService: AuthService,
    private store$: Store<AuthStateModel>
  ) { }

  ngOnInit(): void {
    if(this.authService.isRegistered()) {
      this.users$.pipe(takeUntil(this.destroy$)).subscribe(res => {
        if(!res.find((user) => user.id === this.authService.getLoggedInUserId())) {
          this.authService.pushRegisteredUserToStore();
        }
      })
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
