import { Component,OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl,FormArray  } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/service/service.service';
import { passwordLengthValidator, passwordMatchValidator } from 'src/app/validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  myForm!: FormGroup;
constructor(private userService:UserService,private router:Router){}
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,passwordLengthValidator]),
      confirmPassword: new FormControl('', [Validators.required,passwordMatchValidator]),
      test:new FormArray(
        [new FormControl('',[])]
      )
      
    });
    setTimeout(()=>{

      this.myForm.patchValue({name:"1233"})
    },5000)
    this.myForm.valueChanges.subscribe((value )=>{
      console.log(value)
    })
  }
  get test() {
    return this.myForm.get('test') as FormArray;
  }
  addItem(){
    this.test.push(new FormControl('',[]))
  }

  removeItem(index:any){
    this.test.removeAt(index);
  }
  signUp(){
    console.log("User Registeration")
    this.userService.register(this.myForm.value).subscribe((data:any)=>{
      console.log(data);
      localStorage.setItem('token',data.token);
      localStorage.setItem('user',JSON.stringify(data.user));
      this.router.navigate(['/home'])
    })
  }

}
// function passwordLengthValidator(control: FormControl) {
//   console.log(control.value.length)
//   return control.value.length < 6 ? { passlength: true } : null;
// }
// function passwordMatchValidator(control: FormControl) {
//   const password = control.root.get('password');
//   return password && control.value !== password.value ? { passwordMatch: true } : null;
// }
