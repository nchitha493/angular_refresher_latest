import { Component } from '@angular/core';
import { UserService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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
