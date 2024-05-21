import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavbefloginComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent {

  forgotForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    })
  }
   
  onSubmit(e: Event) {
    e.preventDefault();
    console.log("submit");

    if(this.forgotForm.valid){
    emailjs
      .sendForm('service_b33wh5w', 'template_fqinkyz', e.target as HTMLFormElement , {
        publicKey: 'TiPMp9coe69l6TC0y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // window.location.reload();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );

      //sweet alert
      Swal.fire({
        title: "A reset link sent to your Email !",
        text: "Check your email and Reset your Password ",
        icon: "info"
      });
    }else{
      Swal.fire("Please enter a valid email");
    }

      
  }
}
