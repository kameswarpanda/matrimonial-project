import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, ReactiveFormsModule, CommonModule, NavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

userForm: FormGroup;
isFormSubmitted: boolean = false;

constructor(){
  this.userForm = new FormGroup({
    name: new FormControl("",[Validators.required, Validators.minLength(2)]),
    address: new FormControl("",[Validators.required]),
    mailId: new FormControl("",[Validators.required, Validators.email]),
    mobileNumber: new FormControl("",[Validators.required, Validators.pattern("[0-9 ]{10}")]),
    guestNo: new FormControl(""),
    date: new FormControl(""),
    password: new FormControl("",[Validators.required, Validators.minLength(8)]),

  })
}

  onSubmit(e: Event){
    const isFormValid = this.userForm.valid;
    debugger;
    this.isFormSubmitted = true;
      emailjs
        .sendForm('service_b33wh5w', 'template_rv04sb5', e.target as HTMLFormElement , {
          publicKey: 'TiPMp9coe69l6TC0y',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            window.location.reload();
          },
          (error) => {
            console.log('FAILED...', (error as EmailJSResponseStatus).text);
          },
        );
        alert('Check your email and verify your account, press OK to proceed. ')
    }
  }
