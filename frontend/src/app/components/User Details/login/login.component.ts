import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import { Registration } from '../../../models/registration/registration';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EducationCareerService } from '../../../services/education-level/education-level.service';
import { RegistrationService } from '../../../services/registration/registration.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavbefloginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;

      // console.log('Username:', username);
      // console.log('Password:', password);

      // Clear the form after successful submission
      this.loginForm.reset();
    } else {
      // Mark form fields as touched to display validation errors
      this.loginForm.markAllAsTouched();
    }
  }




























































































































}
