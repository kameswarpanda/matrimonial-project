import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import Swal from 'sweetalert2';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-resetpassword',
  standalone: true,

  imports: [RouterLink, NavbefloginComponent, CommonModule, ReactiveFormsModule],

  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder){
      this.passwordForm = this.fb.group({
        newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
      }, { validators: this.passwordsMatchValidator })
  }

  passwordsMatchValidator(group: FormGroup){
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { passwordsMismatch: true };
  }

  

  onSubmit() {
    if (this.passwordForm.valid) {
      // sweet alert
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Password reset successfull"
      });

    //   const formData = this.ResetPasswordForm.value;
    //   console.log('Form submitted with data:', formData);
    //   // Here you can proceed with sending the form data to your server or performing any other actions
      
    } else {
      

    }


    
   

    
  }
}
