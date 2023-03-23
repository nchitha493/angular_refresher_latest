import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public stringSubject = new Subject();
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
  getString(){
    console.log("ssssssssssssssssssssssssssssssssssssssssss")
    this.stringSubject.next("Hello I am in header and home")
  }
}

// Subject – No initial value or replay available
// BehaviouralSubject – requires an initial value and emits current values to new subscribers .A BehaviorSubject holds one value. When it is subscribed it emits the value immediately. A Subject doesn't hold a value.
// AsyncSubject – Emits latest values to subscribers on completion of the async task //    this.subject.complete();
// ReplaySubject – replays a specified number of last values to new subscribers