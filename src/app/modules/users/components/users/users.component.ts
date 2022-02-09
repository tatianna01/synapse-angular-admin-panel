import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { usersSelector } from 'src/app/store/selectors/auth.selector';
import { AuthStateModel } from 'src/app/store/state/auth.state';
import { CustomPaginator } from './CustomPaginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() }
  ],
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit  {

  displayedColumns: string[] = ['name', 'id', 'phoneNumber', 'email', 'createdAt', 'edit'];
  dataSource: any;

  users$: Observable<User[]> = this.store$.pipe(select(usersSelector))
  destroy$: Subject<boolean> = new Subject<boolean>();
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private store$: Store<AuthStateModel>,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {  
    this.users$.pipe(takeUntil(this.destroy$)).subscribe((res) => this.dataSource = new MatTableDataSource<User>(res));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
