import { Component } from '@angular/core';
 import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    username: "",
    password: "",
    test:[{item:1},{item:2}]
  };
  constructor(private route:Router){

  }
  submit() {
    console.log(this.user)
    alert(`Submited with: ${this.user.username} ${this.user.password}`);
    this.route.navigate(["home"])
  }
  addItem(){
    this.user.test.push({item:0})
  }
}
export interface User {
  username: string;
  password: string;
  test:number[]}