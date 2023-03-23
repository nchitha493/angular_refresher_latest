import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  users:any = localStorage.getItem("user");
  text:any ="";
  outputs:any="";
  constructor(private userService: UserService,private router:Router) {
    this.users = JSON.parse(this.users);
    

  }
  output(value:any){
    this.outputs =value
  }
  ngOnInit(): void {
    console.log(this.userService.stringSubject)
    this.userService.stringSubject.subscribe((data)=>{
      console.log("data")
      this.text= data
    })
   setTimeout( ()=>{
    this.userService.getString()
   },3000
   )
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
