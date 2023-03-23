

import { FormControl } from '@angular/forms';
export function passwordLengthValidator(control:FormControl) {
    console.log(control.value.length)
    return control.value.length < 6 ? { passlength: true } : null;
  }
  export function passwordMatchValidator(control:FormControl) {
    const password = control.root.get('password');
    return password && control.value !== password.value ? { passwordMatch: true } : null;
  }