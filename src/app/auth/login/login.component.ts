import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: User = {
    username: "",
    password: ""
  };
  submit() {
    console.log(this.user)
    alert(`Submited with: ${this.user.username} ${this.user.password}`);
  }

}
export interface User {
  username: string;
  password: string;
}