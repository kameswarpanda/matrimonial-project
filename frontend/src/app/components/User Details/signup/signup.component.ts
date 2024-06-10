import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import { RegistrationService } from '../../../services/registration/registration.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
    CommonModule,
    NavbarComponent,
    NavbefloginComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent implements OnInit {
  userForm!: FormGroup;
  isFormSubmitted: boolean = false;
  rid: number = 1;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', Validators.minLength(3)],
      password: ['', Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)],
      email: ['', Validators.email],
    });

    
  }

  onSubmit(e: Event): void {
    const isFormValid = this.userForm.valid;
    this.isFormSubmitted = true;

    if (this.userForm.valid) {
      const registrationData = this.userForm.value;
      console.log(registrationData)

      this.registrationService.saveRegistration(registrationData).subscribe(
        (response) => {
          this.rid = +response.rid.toString();
          this.registrationService.setrid(this.rid);
          console.log('signup comp:', this.registrationService.getrid());
          console.log('Registration successful signup comp:', response);

          //sweet alert
          Swal.fire({
            title: 'Verify your Email !',
            text: 'Check your email and verify your Account ',
            icon: 'success',
          });
          
          // Email verification
          emailjs
          .sendForm('service_hksa34h', 'template_xt58p0e', e.target as HTMLFormElement , {
            publicKey: 'yoF2P1NACJyTjTxOS',
              }
            )
            .then(
              () => {
                console.log('SUCCESS!');
              },
              (error) => {
                console.log('FAILED...', (error as EmailJSResponseStatus).text);
              }
            );

          this.router.navigate(['/home']);
          // this.router.navigate(['/userinfo', this.userForm.value.userName] );
        },
        (error) => {
          console.error('Registration failed:', error);
          // sweet alert
          Swal.fire({
            title: 'Something went Wrong !',
            text: 'Put valid details',
            icon: 'error',
          });
          // Handle error, show error message, etc.
        }
      );
    } else {
      // sweet alert message
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
        icon: 'error',
        title: 'Please fill out all required fields',
      });
    }
  }
}
