import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EducationCareerService } from '../../../../../../../services/education-level/education-level.service';
import { EducationCareer } from '../../../../../../../models/education-career/education-career';
import { Registration } from '../../../../../../../models/registration/registration';
import { RegistrationService } from '../../../../../../../services/registration/registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-educational-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-educational-info.component.html',
  styleUrls: ['./update-educational-info.component.css']
})
export class UpdateEducationalInfoComponent implements OnInit {
  educationForm!: FormGroup;
  loggedInUser: string = '';
  registration!: Registration;
  educationCareers: any;
  educationCareer: any;
  educationId!: number;

  constructor(
    private fb: FormBuilder,
    private educationCareerService: EducationCareerService,
    private registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.educationForm = this.fb.group({
      educationLevel: ['', Validators.required],
      educationField: ['', Validators.required]
    });

    this.loggedInUser = sessionStorage.getItem('loggedInUser') ?? '';
    this.loadRegistrationDetails();
  }

  loadRegistrationDetails(): void {
    this.registrationService.findByUserName(this.loggedInUser).subscribe(
      (data: Registration) => {
        this.registration = data;
        this.loadEducationInfo();
      },
      (error) => {
        console.log('Error fetching registration details:', error);
      }
    );
  }

  loadEducationInfo(): void {
    this.educationCareerService.getAllEducationInfo().subscribe((educationCareers: any) => {
      this.educationCareers = educationCareers;
      this.educationCareer = this.educationCareers.find((ec: { registration: { rid: number; }; }) => ec.registration.rid === this.registration.rid);
      if (this.educationCareer) {
        this.educationId = this.educationCareer.id;
        this.educationCareerService.getEducationInfoById(this.educationId).subscribe((data: EducationCareer) => {
          this.educationForm.patchValue(data);
        });
      }
    });
  }

  onSubmit(): void {
    if (this.educationForm.valid) {
      const educationInfo = {
        educationLevel: this.educationForm.get('educationLevel')!.value,
        educationField: this.educationForm.get('educationField')!.value,
        registration: this.registration
      };
      this.educationCareerService.updateEducationInfo(this.educationId, educationInfo).subscribe(
        response => {
          console.log('Education info updated successfully', response);
          this.showToast('success', 'EducationInfo successfully updated');
        },
        error => {
          console.error('Error updating education info', error);
          this.showToast('error', 'Error updating education info');
        }
      );
    }
  }

  private showToast(icon: 'success' | 'error', title: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: icon,
      title: title,
    });
  }
}
