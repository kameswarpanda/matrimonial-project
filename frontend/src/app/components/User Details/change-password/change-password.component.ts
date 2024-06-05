import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

import Swal from 'sweetalert2';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Registration } from '../../../models/registration/registration';
import { RegistrationService } from '../../../services/registration/registration.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [
    RouterLink,
    NavbefloginComponent,
    CommonModule,
    ReactiveFormsModule,
    NavbarComponent
  ],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent implements OnInit{
  passwordForm: FormGroup;
  loggedInUser: string | null = null;
  registration: any;

  constructor(private fb: FormBuilder, private router: Router, private registrationService : RegistrationService) {
    this.passwordForm = this.fb.group(
      {
        oldPassword: ['', [Validators.required, Validators.minLength(8)]],
        newPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  ngOnInit(): void {
    this.loggedInUser = sessionStorage.getItem('loggedInUser');
    this.registration = this.loadRegistrationDetails();

    // Ensure sessionStorage is accessed only in the browser
    if (typeof window !== 'undefined' && window.sessionStorage) {
      const someData = sessionStorage.getItem('someData');
      // Process the retrieved data as needed
    } else {
      console.error('sessionStorage is not available.');
    }
  }

  passwordsMatchValidator(group: FormGroup) {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { passwordsMismatch: true };
  }

  onSubmit() {
    if (this.passwordForm.valid && this.registration) {
      // Extract new password
      const newPassword = this.passwordForm.get('newPassword')?.value;

      // Update password in the registration object
      this.registration.password = newPassword;

      // Call the service to update the password
      this.registrationService.updateRegistration(this.registration).subscribe(
        (response) => {
          // Display success message
          Swal.fire({
            icon: 'success',
            title: 'Password changed successfully',
          });

          // Redirect to the desired page
          this.router.navigate(['/page']);
        },
        (error) => {
          console.error('Error updating password:', error);
          // Display error message
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong! Unable to change password.',
          });
        }
      );
    }
  }
  loadRegistrationDetails(): void {
    const loggedInUserName: string = this.loggedInUser !== null ? this.loggedInUser : '';
    this.registrationService.findByUserName(loggedInUserName).subscribe(
      (data: Registration) => {
        console.log(data);
        this.registration = data;
        this.registration = {
          rid: data.rid,
          userName: data.userName,
          password: data.password,
          email: data.email,
        };
      },
      (error) => {
        console.log('Error fetching registration details:', error);
      }
    );
  }
}
