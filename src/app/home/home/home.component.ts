import { Component } from '@angular/core';
import { UserService } from 'src/app/service/service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users:any = localStorage.getItem("user");
  constructor(private userService: UserService,private router:Router) {
    this.users = JSON.parse(this.users);
  }
  logout(){
    this.userService.logout().subscribe((data:any)=>{
      localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/'])
    },(error)=>{
      console.log("error");
    });
  }
  logoutAll(){
    this.userService.logoutAll().subscribe((data:any)=>{
      localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/'])
    },(error)=>{
      console.log("error");
    });
  }

}
