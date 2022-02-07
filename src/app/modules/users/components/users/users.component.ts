import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { loggedInUserSelector, usersSelector } from 'src/app/store/selectors/auth.selector';
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

  displayedColumns: string[] = ['name', 'id', 'phoneNumber', 'email', 'edit', 'createdAt'];
  dataSource: any;

  loggedInUser$: Observable<User> = this.store$.pipe(select(loggedInUserSelector))
  users$: Observable<User[]> = this.store$.pipe(select(usersSelector))

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store$: Store<AuthStateModel>) { }

  ngOnInit(): void {
    this.users$.subscribe((res) => this.dataSource = new MatTableDataSource<User>(res));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
