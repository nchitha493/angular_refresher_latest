import { Component } from '@angular/core';
 import { Router } from '@angular/router';
import { UserService } from 'src/app/service/service.service';


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
  constructor(private router:Router,private userService: UserService){

  }
  submit() {
    console.log(this.user)
    alert(`Submited with: ${this.user.username} ${this.user.password}`);
   
    this.userService.login(this.user).subscribe((data:any)=>{
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