import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Registration } from '../../../models/registration/registration';
import { RegistrationService } from '../../../services/registration/registration.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NavbefloginComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  userForm: FormGroup;
  isFormSubmitted: boolean = false;
  registration: any;
  loginInfo: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService
  ) {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.minLength(3)],
      password: ['', Validators.minLength(8)],
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.showToast('error', 'Please fill out both Username and Password');
      return;
    }

    const loginInfo = {
      userName: this.userForm.value.userName,
      password: this.userForm.value.password,
    };

    if (
      this.userForm.value.userName === 'Admin' &&
      this.userForm.value.password === 'Admin123'
    ) {
      this.showToast('success', 'Admin Signed in successfully');
      sessionStorage.setItem('loggedInUser', loginInfo.userName);
      sessionStorage.setItem('isFirstLogin', 'true');
      this.router.navigate(['/admin/admin/dashboard']);
    } else {
      this.registrationService.findByUserName(loginInfo.userName).subscribe(
        (data) => {
          if (data && data.password === loginInfo.password) {
            this.showToast('success', 'Signed in successfully');
            sessionStorage.setItem('loggedInUser', loginInfo.userName);
            sessionStorage.setItem('loggedInUserEmail', data.email); // Store email in session storage
            this.router.navigate(['/page']);
            console.log(data.email);
          } else {
            this.showToast('error', 'Incorrect username or password');
          }
        },
        (error) => {
          console.log('Error fetching registration details:', error);
          this.showToast('error', 'User not found');
        }
      );
    }
  }

  private showToast(icon: 'success' | 'error', title: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: icon,
      title: title,
    });
  }
}
