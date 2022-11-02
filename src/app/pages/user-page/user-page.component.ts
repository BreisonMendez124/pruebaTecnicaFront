import { Component, Input, OnInit } from '@angular/core';
import { userModel } from 'src/app/modules/user.module';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  users:userModel = new userModel();
  follower:Object = {}

  constructor(private router:ActivatedRoute,
    private getDataService:GetDataService) { }

  

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id')); 
    console.log(id)
    this.getDataService.getUserById( id ).subscribe((resp:any) =>{
      this.users = resp;
      this.users.id = id;
    });
  }

}
