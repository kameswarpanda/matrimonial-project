import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, Router, RouterLinkActive, ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import Swal from 'sweetalert2';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import { RegistrationService } from '../../../services/registration/registration.service';
import { Registration } from '../../../models/registration/registration';
import { EducationCareerService } from '../../../services/education-level/education-level.service';

@Component({
  selector: 'app-educational-info',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NavbarComponent, RouterLinkActive, NavbefloginComponent],
  templateUrl: './educational-info.component.html',
  styleUrl: './educational-info.component.css'
})
export class EducationalInfoComponent implements OnInit {
  educationInfoForm: FormGroup;
  userName!: string;
  registration!: Registration;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService,
    private educationService: EducationCareerService,
    private route: ActivatedRoute
  ) {
    this.educationInfoForm = this.formBuilder.group({
      educationLevel: ['', Validators.required],
      educationField: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userName = this.route.snapshot.paramMap.get('userName') ?? '';
    this.loadRegistrationDetails();
  }

  onSubmit() {
    if (this.educationInfoForm.valid) {
      const educationInfo = {
        educationLevel: this.educationInfoForm.get('educationLevel')!.value,
        educationField: this.educationInfoForm.get('educationField')!.value,
        registration: this.registration
      };

      
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

      this.educationService.saveEducationInfo(educationInfo).subscribe(
        (response) => {
          console.log('Educational info received successfully');
          this.router.navigate(['/familyinfo', this.userName]);
        },
        (error) => {
          console.error('Failed to save educational info:', error);
        }
      );
      

    } else {
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

  loadRegistrationDetails(): void {
    this.registrationService.findByUserName(this.userName).subscribe(
      (data: Registration) => {
        this.registration = data;
      },
      (error) => {
        console.log('Error fetching registration details:', error);
      }
    );
  }
}
