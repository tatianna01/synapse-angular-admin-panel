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

  graphdataPhone: number[];
  graphdataLaptop: number[];

  chartOption: EChartsOption;

  constructor(private store$: Store<DashboardStateModel>) { }

  ngOnInit(): void {
    this.dashboard$.subscribe((res)=> this.graphdataPhone = res.graphdataPhone);
    this.dashboard$.subscribe((res)=> this.graphdataLaptop = res.graphdataLaptop);

    this.chartOption = {
      xAxis: {
        type: 'category',
        axisTick: { show: false },
        axisLine: { show: false },
        data: ['1Aug', '2Aug', '3Aug', '4Aug', '5Aug', '6Aug', '6Aug'],
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: true,
          lineStyle: {
            type: "dashed"
          }
        } 
      },
      grid: {
        width: '93%',
        right: '2%'
      },
      textStyle: {
        fontFamily:'Roboto',
        color: '#A6B1BB',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '14px'
      },
      series: [
        {
          type: 'bar',
          barWidth: 10,
          color: '#00B4D8',
          name: 'phone',
          data: this.graphdataPhone,
          itemStyle: {
            borderRadius: [3, 3, 0, 0],
            borderWidth: 1
          }
        },
        {
          type: 'bar',
          barWidth: 10,
          color: '#EDF0F2',
          name: 'laptop',
          data: this.graphdataLaptop,
          itemStyle: {
            borderRadius: [3, 3, 0, 0],
            borderWidth: 1
          }
        },
      ],
    };
  
  }

}
