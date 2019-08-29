import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {RegisterService} from "../../services/register.service";
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  model: any = { firstName: '', lastName: '', username: '', password: '' };
  constructor(private registerService: RegisterService, private router: Router) {

  }

  isFormSubmittedWithInvalidUsername(registrationForm: NgForm): boolean {
    const usernameFormControl = registrationForm.form.controls['username'];
    return registrationForm.submitted && usernameFormControl && !usernameFormControl.valid;
  }
  isFormSubmittedWithInvalidName(registrationForm: NgForm): boolean {
    const nameFormControl = registrationForm.form.controls['firstName'];
    return registrationForm.submitted && nameFormControl && !nameFormControl.valid;
  }
  isFormSubmittedWithInvalidSurname(registrationForm: NgForm): boolean {
    const surnameFormControl = registrationForm.form.controls['lastName'];
    return registrationForm.submitted && surnameFormControl && !surnameFormControl.valid;
  }
  isFormSubmittedWithInvalidPassword(registrationForm: NgForm): boolean {
    const passwordFormControl = registrationForm.form.controls['password'];
    return registrationForm.submitted && passwordFormControl && !passwordFormControl.valid;
  }

  onSubmit(loginForm: NgForm): void {
    if (loginForm.valid) {
      this.registerService.register(this.model).subscribe(
        (res) => {
          alert("Your account has been successfully created please log in!");
          this.router.navigate(['/login']);
        },
        (err) => {
          alert("There was error with creating account" + err);
        }
      );
    }
  }
}
