import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';

@Component({
  selector: 'app-family-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, NavbarComponent, NavbefloginComponent],
  templateUrl: './family-info.component.html',
  styleUrl: './family-info.component.css',
})
export class FamilyInfoComponent {

  familyInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.familyInfoForm = this.formBuilder.group({
      familyStatus: ['', Validators.required],
      familyType: ['', Validators.required],
      fatherName: ['', Validators.required],
    });

    // this.rid = this.registrationService.getrid();
    // this.loadRegistrationDetails();
    
  }

  onSubmit() {
    
    
    if (this.familyInfoForm.valid) {
      
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
        title: "Registration Successful"
      });

      this.router.navigate(['/login']);

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
