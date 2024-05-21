import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  RouterLink,
  RouterLinkActive,
  Router,
  
} from '@angular/router';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    NavbefloginComponent,
  ],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css',
})
export class PersonalInfoComponent {
  photographBloodGroupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    
  ) {
    this.photographBloodGroupForm = this.formBuilder.group({
      photograph: [null, Validators.required],
      bloodGroup: ['', Validators.required],
    });
  }

  //image preview
  // const fileInput = document.getElementById('photograph');
  //   const imagePreview = document.getElementById('imagePreview');

  //   photograph.addEventListener('change', function(event) {
  //     const file = this.files[0];
  //     if (file) {
  //       const reader = new FileReader();
  //       reader.onload = function(event) {
  //         const img = new Image();
  //         img.src = event.target.result;
  //         img.style.maxWidth = '100%'; // Adjust as needed
  //         img.style.height = 'auto'; // Maintain aspect ratio
  //         imagePreview.innerHTML = ''; // Clear previous previews
  //         imagePreview.appendChild(img);
  //       };
  //       reader.readAsDataURL(file);
  //     }
  //   });

  onSubmit() {
    if (this.photographBloodGroupForm.valid) {
      const formData = this.photographBloodGroupForm.value;
      console.log('Form submitted with data:', formData);
      this.router.navigate(['/educationalinfo']);
      
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
        title: "Personal-info recived successfully"
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

    // if(this.photographBloodGroupForm.value == ''){
    //   alert("Please provide your profile photo and Age");
    // }
  }
}
