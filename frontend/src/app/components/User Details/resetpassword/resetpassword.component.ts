import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

import Swal from 'sweetalert2';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import { CommonModule } from '@angular/common';
import { Registration } from '../../../models/registration/registration';
import { RegistrationService } from '../../../services/registration/registration.service';
@Component({
  selector: 'app-resetpassword',
  standalone: true,

  imports: [
    RouterLink,
    NavbefloginComponent,
    CommonModule,
    ReactiveFormsModule,
  ],

  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css',
})
export class ResetpasswordComponent implements OnInit {
  passwordForm: FormGroup;
  userName!: string;
  registration: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private registrationService : RegistrationService
  ) {
    this.passwordForm = this.fb.group(
      {
        newPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]],
        confirmPassword: ['', Validators.required],
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  passwordsMatchValidator(group: FormGroup) {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { passwordsMismatch: true };
  }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('userName') ?? '';
    this.registration = this.loadRegistrationDetails();
  }

  loadRegistrationDetails(): void {
    const resetUserName: string = this.userName !== null ? this.userName : '';
    this.registrationService.findByUserName(resetUserName).subscribe(
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
          this.router.navigate(['/login']);
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

  
}
