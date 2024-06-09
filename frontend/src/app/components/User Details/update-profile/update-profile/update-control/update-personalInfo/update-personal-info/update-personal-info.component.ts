import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PersonalInfoService } from '../../../../../../../services/personal-info/personal-info.service';
import { Registration } from '../../../../../../../models/registration/registration';
import { RegistrationService } from '../../../../../../../services/registration/registration.service';

@Component({
  selector: 'app-update-personal-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-personal-info.component.html',
  styleUrls: ['./update-personal-info.component.css']
})
export class UpdatePersonalInfoComponent implements OnInit {
  personalForm!: FormGroup;
  loggedInUser: string = '';
  imagePreview: string | ArrayBuffer | null = '';
  selectedFile: File | null = null;
  registration!: Registration;
  id: number = 1;

  constructor(
    private fb: FormBuilder,
    private personalInfoService: PersonalInfoService,
    private registrationService: RegistrationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personalForm = this.fb.group({
      photograph: [null, Validators.required],
      bloodGroup: ['', Validators.required]
    });

    this.loggedInUser = sessionStorage.getItem('loggedInUser') ?? '';
    this.loadRegistrationDetails();

  }

  loadRegistrationDetails(): void {
    this.registrationService.findByUserName(this.loggedInUser).subscribe(
      (data: Registration) => {
        this.registration = data;
      },
      (error) => {
        console.log('Error fetching registration details:', error);
      }
    );
  }

  

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(): void {
    if (this.personalForm.valid && this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);
      formData.append('bloodGroup', this.personalForm.get('bloodGroup')!.value);
      formData.append('registration', JSON.stringify(this.registration));

      this.personalInfoService.updatePersonalInfo(this.registration.rid, formData).subscribe(
        (response) => {
          console.log('Personal info updated successfully:', response);
          Swal.fire({
            title: 'Success!',
            text: 'Your personal information has been updated successfully.',
            icon: 'success',
          });
        },
        (error) => {
          console.error('Failed to update personal info:', error);
          Swal.fire({
            title: 'Something went wrong!',
            text: 'Please check the details and try again.',
            icon: 'error',
          });
        }
      );
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill out all required fields.',
        icon: 'error',
      });
    }
  }
}
