import { Component ,Input} from '@angular/core';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input('labels') barChartLabels: any[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  @Input('data') barChartData: ChartDataset[] = [
    { data: [], label: 'Top more followes' }
  ];
  estado:boolean = false;

  

 

}
