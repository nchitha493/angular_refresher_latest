import { Component } from '@angular/core';

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
  submit() {
    console.log(this.user)
    alert(`Submited with: ${this.user.username} ${this.user.password}`);
  }
  addItem(){
    this.user.test.push({item:0})
  }
}
export interface User {
  username: string;
  password: string;
  test:number[]}