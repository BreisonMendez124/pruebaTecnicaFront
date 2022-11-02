import { Injectable } from '@angular/core';
import { GetDataService } from './get-data.service';

@Injectable({
  providedIn: 'root'
})
export class TopChartService {

  constructor(private dataUserService:GetDataService) { }

  getUsers(followers:any){
    this.dataUserService.GetUser('YOUR_NAME').subscribe(resp =>{
      resp.forEach((userIterator,index)=>{
        if(index <= 10){
          this.dataUserService.getFollower(userIterator.followers_url).subscribe(respFollowers =>{
              followers[0].push(userIterator.login)
              followers[1][0].data.push(respFollowers.length);
          });
        }
      })
     });
  }
}
