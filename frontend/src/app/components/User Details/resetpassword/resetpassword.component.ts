import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css'
})
export class ResetpasswordComponent {

  ResetPasswordForm!: FormGroup;

  

  onSubmit() {
    // if (this.ResetPasswordForm.valid) {
    //   const formData = this.ResetPasswordForm.value;
    //   console.log('Form submitted with data:', formData);
    //   // Here you can proceed with sending the form data to your server or performing any other actions
      
    // } else {
      
    // }
    alert('Password Reset Successfull please login your Account');
  }
}
