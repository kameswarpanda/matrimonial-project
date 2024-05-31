import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavbefloginComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent {
  forgotForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      userName: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log("submit");

    if (this.forgotForm.valid) {
      emailjs.sendForm(
        'service_b33wh5w', 
        'template_fqinkyz', 
        e.target as HTMLFormElement, 
        'TiPMp9coe69l6TC0y'
      ).then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "A reset link sent to your Email!",
            text: "Check your email and Reset your Password",
            icon: "info"
          }).then(() => {
            this.router.navigate(['/login']);
          });
        },
        (error: EmailJSResponseStatus) => {
          console.log('FAILED...', error.text);
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Please fill out all required fields',
        toast: true,
        position: 'center-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
      });
    }
  }
}
