import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectDashboardFeature } from 'src/app/store/selectors/dashboard.selectors';
import { DashboardStateModel } from 'src/app/store/state/dashboard.state';
import { EChartsOption } from 'echarts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboard$: Observable<DashboardStateModel> = this.store$.pipe(select(selectDashboardFeature));

  
  constructor(private store$: Store<DashboardStateModel>) { }

  ngOnInit(): void {
  }

}
