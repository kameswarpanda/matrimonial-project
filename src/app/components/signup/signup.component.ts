import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, ReactiveFormsModule, CommonModule],
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

  onSubmit(){
    const isFormValid = this.userForm.valid;
    debugger;
    this.isFormSubmitted = true;
  }
}