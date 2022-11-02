import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SearchUserPipe } from '../pipes/search-user.pipe';
import { UserPageComponent } from './user-page/user-page.component';
import { ChartComponent } from '../components/chart/chart.component';
import { NgChartsModule } from 'ng2-charts';
import { TopChartsComponent } from './top-charts/top-charts.component';
import { AlertsComponent } from '../components/alerts/alerts.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    SearchUserPipe,
    UserPageComponent,
    ChartComponent,
    TopChartsComponent,
    AlertsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    NgChartsModule,
    SharedModule
  
  ],
  exports:[ 
    DashboardComponent,
    UserPageComponent,
    PagesComponent,
    ChartComponent,
    AlertsComponent
  ]
})
export class PagesModule { }