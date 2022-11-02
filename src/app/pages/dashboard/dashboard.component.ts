import { Component, OnInit } from '@angular/core';
import { userModel } from 'src/app/modules/user.module';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  search:string = '';
  valueFileUserName:string = '';
  users:userModel[] = [];
  estado:boolean = true;

  constructor(private getDataService:GetDataService)  { }
  ngOnInit(): void { }
  
  getUser(){
    if(this.valueFileUserName != 'doublevpartners' && this.valueFileUserName.length >= 4){
      this.estado = true;
      this.getDataService.GetUser(this.valueFileUserName).subscribe( resp =>{
        this.users = resp
       });
    }else{
      this.estado = false;
    }
  }
}
