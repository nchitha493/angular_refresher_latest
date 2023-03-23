import { Component,OnInit } from '@angular/core';
 import { Router } from '@angular/router';
import { UserService } from 'src/app/service/service.service';
import {  switchMap,of } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    username: "",
    password: "",
    test:[{item:1},{item:2}]
  };
  subscriptionUsers:any = "";
  ngOnInit(){
    this.userService.getUsersForSubscription().subscribe((data)=>{
      this.subscriptionUsers =data
    })
  }
  constructor(private router:Router,private userService: UserService){

  }

  submit() {
    console.log(this.user)
    alert(`Submited with: ${this.user.username} ${this.user.password}`);
   
    this.userService.login(this.user).pipe(switchMap((x:any)=>{
        return of(x)
    })).subscribe((data:any)=>{
      localStorage.setItem('token',data.token);
        localStorage.setItem('user',JSON.stringify(data.user));
        this.router.navigate(['/home'])
    },(error)=>{
      console.log("error",error);
    });
  }
  addItem(){
    this.user.test.push({item:0})
  }
}
export interface User {
  username: string;
  password: string;
  test:number[]}