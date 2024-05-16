import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { EducationCareerService } from '../../../services/education-level/education-level.service';
import { RegistrationService } from '../../../services/registration/registration.service';
import { Registration } from '../../../models/registration/registration';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';

@Component({
  selector: 'app-educational-info',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NavbarComponent, NavbefloginComponent],
  templateUrl: './educational-info.component.html',
  styleUrl: './educational-info.component.css'
})
export class EducationalInfoComponent implements OnInit{
  educationInfoForm!: FormGroup;
  registration: any;
  rid!:number;
  educationInfo!:any;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private educationCareerService: EducationCareerService,
    private registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.educationInfoForm = this.formBuilder.group({
      educationLevel: ['', Validators.required],
      educationField: ['', Validators.required]
    });

  // Log the value of rid when BasicInfoComponent is initialized
  console.log('RID in BasicInfoComponent ngOnInit:', this.rid);

  // Retrieve the rid from RegistrationService
  this.rid = this.registrationService.getrid();
  console.log('RID retrieved from RegistrationService:', this.rid, typeof this.rid);
    this.loadRegistrationDetails();
  }
  // onContinue() {
  //   if (this.personalInfoForm.valid) {
  //     const formData = this.personalInfoForm.value;
  //     console.log('Form submitted with data:', formData);
  //   } else {
  //     alert('Please fill out all required fields.');
  //   }
  // }



  onSubmit() {
    this.educationInfo = {
      educationLevel: this.educationInfoForm.value.educationalLevel,
      educationField: this.educationInfoForm.value.educationalField,
      registration: this.registration
    }

    this.educationCareerService.addEducationCareer(this.educationInfo)
      .subscribe(
        (response) => {
          // console.log('Successfully submitted:', response);
          console.log("Education Data successfully filled");
          
        },
        (error) => {
          console.error('Error:', error);
          // Handle error response
        }
      );

      this.router.navigate(['/familyinfo']);
  }

  loadRegistrationDetails(): void {
    this.registrationService.getRegistrationById(this.rid)
      .subscribe(
        (data: Registration) => {
          console.log(data);
          this.registration = data;
          this.registration = {
            rid: data.rid,
            userName: data.userName,
            password: data.password,
            email: data.email
          };
        },
        error => {
          console.log('Error fetching registration details:', error);
        }
      );
  }
}
