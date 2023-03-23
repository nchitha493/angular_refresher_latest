import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }
  register(register:any){
    return this.httpClient.post(`http://localhost:3000/users`,{name:register.name,email:register.email,age:register.age,password:register.password});
  }

  login(login:any){
    return this.httpClient.post(`http://localhost:3000/login`,{email:login.username,password:login.password});
  }

  logout(){
    return this.httpClient.post(`http://localhost:3000/users/logout`,{});
  }

  logoutAll(){
    return this.httpClient.post(`http://localhost:3000/users/logoutAll`,{});
  }

  chart(){
    return this.httpClient.get(`http://localhost:3000/users/chart`,{});
  }
  
  getUsersForSubscription()
  {
    let data = new Observable(observer => {
          setTimeout(() => {
            observer.next("Hello World");
          }, 2000);
    });
    return data;
  }
}