import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import Swal from 'sweetalert2';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';

@Component({
  selector: 'app-educational-info',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NavbarComponent, RouterLinkActive, NavbefloginComponent],
  templateUrl: './educational-info.component.html',
  styleUrl: './educational-info.component.css'
})
export class EducationalInfoComponent {
  educationInfoForm: FormGroup;
  

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.educationInfoForm = this.formBuilder.group({
      educationLevel: ['', Validators.required],
      educationField: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.educationInfoForm.valid) {
      const formData = this.educationInfoForm.value;
      console.log('Form submitted with data:', formData);
      this.router.navigate(['/familyinfo']);
      // alert('educational info recived Successfully ');
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
        title: "Educational-info recived successfully"
      });

    } else {
      // alert('Please fill out all required fields.');
      // sweet alert
      const Toast = Swal.mixin({
        toast: true,
        position: "center-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "error",
        title: "Please fill out all required fields."
      });
    }

    
  }
}
