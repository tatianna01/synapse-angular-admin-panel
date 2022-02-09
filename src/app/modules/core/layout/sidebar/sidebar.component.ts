import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { usersSelector } from 'src/app/store/selectors/auth.selector';
import { AuthStateModel } from 'src/app/store/state/auth.state';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {

  user: User;

  users$: Observable<User[]> = this.store$.pipe(select(usersSelector))
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private store$: Store<AuthStateModel>,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.users$.pipe(takeUntil(this.destroy$)).subscribe((res) => {
      this.user = res.find((user) => user.id === this.authService.getLoggedInUserId());
    })
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
