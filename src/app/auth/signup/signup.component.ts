import { Component,OnInit  } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl,FormArray  } from '@angular/forms';
import { passwordLengthValidator, passwordMatchValidator } from 'src/app/validator';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  myForm!: FormGroup;

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
