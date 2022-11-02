import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { TopChartService } from 'src/app/services/top-chart.service';

@Component({
  selector: 'app-top-charts',
  templateUrl: './top-charts.component.html',
  styleUrls: ['./top-charts.component.css']
})
export class TopChartsComponent implements OnInit {
  //dataSet = [{ data: [ 200, 100, 280 ], label: 'Niuevoovo' }]
  public followers:any[] = [
    [],
    [
      {data:[],label:'Top 10 users'}
    ]
  ];
  estado:boolean = false;

  constructor(private topChartService:TopChartService) { }

  ngOnInit(): void {
    this.getUsers()
    setTimeout(() => {
      this.estado = true  
    }, 1000);
   }

  getUsers(){
    this.topChartService.getUsers(this.followers);
  }

}
