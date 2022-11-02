import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserPageComponent } from './user-page/user-page.component';
import { TopChartsComponent } from './top-charts/top-charts.component';



const routes: Routes = [
    {
        path:'Dashboard', 
        component:PagesComponent,
        children:[
         {path:'', component:DashboardComponent},
         {path:'userPage/:id', component:UserPageComponent},
         {path:'graficas', component:TopChartsComponent},
        ]
       },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRouterModule {}
