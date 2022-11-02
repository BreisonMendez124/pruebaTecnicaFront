import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { userModel } from '../modules/user.module';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private httpClient:HttpClient) { }
  private url = 'https://api.github.com/search/users?q=';
  private urlById = 'https://api.github.com/user/';

  getUserById(idUser:Number){
    return this.httpClient.get(`${this.urlById}${idUser}`);
  }

  getFollower(urlFollowers:String){
    return this.httpClient.get(`${urlFollowers}`).pipe(
      map( this.crearArregloFollower )
    );
  }

  
  GetUser(userName:String){
    return this.httpClient.get(`${this.url}${userName}`).pipe(
      map( this.crearArreglo )
    )
  }

  private crearArregloFollower(userModelData:any){
    const users:userModel[] = [];
    if(userModelData === null) { return []; }
      Object.keys(userModelData).forEach(key => {
        const user:userModel = userModelData[key];
        user.login = userModelData[key].login;
        users.push( user );
      })
      return users;
  }

  private crearArreglo(userModelData:any){
    const users:userModel[] = [];
    if(userModelData === null) { return []; }
      Object.keys(userModelData.items).forEach(key => {
        const user:userModel = userModelData.items[key];
        user.login = userModelData.items[key].login;
        users.push( user );
      })
      return users;
  }



  getPosts(){
    return this.httpClient.get(this.url);
  }
}
