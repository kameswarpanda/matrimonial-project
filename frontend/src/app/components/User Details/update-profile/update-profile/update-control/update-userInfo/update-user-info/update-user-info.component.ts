import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserInfoService } from '../../../../../../../services/userinfo/userinfo.service';
import { UserInfo } from '../../../../../../../models/userinfo/userinfo';
import { RegistrationService } from '../../../../../../../services/registration/registration.service';
import { Registration } from '../../../../../../../models/registration/registration';

@Component({
  selector: 'app-update-user-info',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-user-info.component.html',
  styleUrls: ['./update-user-info.component.css']
})
export class UpdateUserInfoComponent implements OnInit {
  userForm!: FormGroup;
  loggedInUser: string = '';
  registration: Registration | null = null;
  userInfo: UserInfo | null = null;

  constructor(
    private fb: FormBuilder,
    private userInfoService: UserInfoService,
    private registrationService: RegistrationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      userName: [{ value: '', disabled: true }],
      email: [{ value: '', disabled: true }],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      gender: ['', Validators.required]
    });

    this.loggedInUser = sessionStorage.getItem('loggedInUser') ?? '';
    this.loadRegistrationDetails();
  }

  loadRegistrationDetails(): void {
    this.registrationService.findByUserName(this.loggedInUser).subscribe(
      (data: Registration) => {
        this.registration = data;
        this.userForm.patchValue({
          userName: this.registration.userName,
          email: this.registration.email
        });
        this.loadUserInfo(); 
        // Move this call inside the subscription to ensure registration is loaded before loading user info
      },
      (error) => {
        console.log('Error fetching registration details:', error);
      }
    );
  }

  loadUserInfo(): void {
    if (this.registration) {
      this.userInfoService.getUserInfoById(this.registration.rid).subscribe(
        (data: UserInfo) => {
          this.userInfo = data;
          this.userForm.patchValue({
            firstName: this.userInfo.firstName,
            lastName: this.userInfo.lastName,
            age: this.userInfo.age,
            gender: this.userInfo.gender
          });
        },
        (error) => {
          console.log('Error fetching user info:', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.userForm.valid && this.registration) {
      const userInfo = {
        firstName: this.userForm.get('firstName')!.value,
        lastName: this.userForm.get('lastName')!.value,
        age: this.userForm.get('age')!.value,
        gender: this.userForm.get('gender')!.value,
        registration: this.registration
      };
      this.userInfoService.updateUserInfo(this.registration.rid, userInfo).subscribe(
        response => {
          Swal.fire({
            title: 'Success!',
            text: 'User info updated successfully.',
            icon: 'success'
          });
          
        },
        error => {
          console.error('Update failed:', error);
          Swal.fire({
            title: 'Error!',
            text: 'Failed to update user information. Please try again.',
            icon: 'error'
          });
        }
      );
    }
  }
}
