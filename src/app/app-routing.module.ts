import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { NopagefoundComponent } from './nopagefound/nopagefound/nopagefound.component';


//MODULOS


import { PagesRouterModule } from './pages/pages.routing';



const router: Routes = [
  //Paginas principales
  { path:"", redirectTo:"/Dashboard",pathMatch:'full'},
  { path:"**", component:NopagefoundComponent}

]



@NgModule({
  imports: [ 
              RouterModule.forRoot(router) ,
              PagesRouterModule
            ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
