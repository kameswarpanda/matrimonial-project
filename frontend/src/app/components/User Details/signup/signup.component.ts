import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import { RegistrationService } from '../../../services/registration/registration.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink,RouterLinkActive, ReactiveFormsModule, CommonModule, NavbarComponent, NavbefloginComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

userForm!: FormGroup;
isFormSubmitted: boolean = false;
rid: number = 1;

constructor(
  private formBuilder: FormBuilder,
  private router: Router,
  private registrationService: RegistrationService,
) { }

ngOnInit(): void {
  this.userForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required]
  });
}

  onSubmit(e: Event): void{
    const isFormValid = this.userForm.valid;
    this.isFormSubmitted = true;
      emailjs
        .sendForm('service_hksa34h', 'template_xt58p0e', e.target as HTMLFormElement , {
          publicKey: 'yoF2P1NACJyTjTxOS',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            this.router.navigate(['/userinfo']);
          },
          (error) => {
            console.log('FAILED...', (error as EmailJSResponseStatus).text);
          },
        );
        // alert('Check your email and verify your account, press OK to proceed. ')

        if (this.userForm.valid) {
          const registrationData = this.userForm.value;
    
          this.registrationService.saveRegistration(registrationData)
            .subscribe(response => {
              this.rid = +response.rid.toString(); 
              this.registrationService.setrid(this.rid);
              console.log('signup comp:', this.registrationService.getrid())
              console.log('Registration successful signup comp:', response);
              // if (typeof localStorage !== 'undefined') {
              //   localStorage.setItem('registrationId', response.rid.toString());
              // }
              this.router.navigate(['/userinfo']);
            }, error => {
              console.error('Registration failed:', error);
              // Handle error, show error message, etc.
            });
      }

    }


}
