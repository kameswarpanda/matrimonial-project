import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,ReactiveFormsModule,Validators,} from '@angular/forms';
import {ActivatedRoute,Router,RouterLink,RouterLinkActive,} from '@angular/router';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import { UserInfoService } from '../../../services/userinfo/userinfo.service';
import { RegistrationService } from '../../../services/registration/registration.service';
import { Registration } from '../../../models/registration/registration';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NavbefloginComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css',
})
export class UserInfoComponent implements OnInit {
  userInfo: any;
  userForm: FormGroup;
  rid: number = 2;
  registration: any;
  userName! : string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userInfoService: UserInfoService,
    private registrationService: RegistrationService,
    private route: ActivatedRoute
  ) {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Log the value of rid when BasicInfoComponent is initialized
    // console.log('RID in BasicInfoComponent ngOnInit:', this.rid);

    // Retrieve the rid from RegistrationService
    // this.rid = this.registrationService.getrid();
    // console.log(
    //   'RID retrieved from RegistrationService:',
    //   this.rid,
    //   typeof this.rid
    // );

    this.userName = this.route.snapshot.paramMap.get('userName') ?? "";

    this.loadRegistrationDetails();
  }

  onSubmit() {
    this.userInfo = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      age: this.userForm.value.age,
      gender: this.userForm.value.gender,
      registration: this.registration,
    };

    this.userInfoService.saveUserInfo(this.userInfo).subscribe(
      (response) => {
        console.log('User info saved successfully:', response);
        this.router.navigate(['/personalinfo', this.userName]);
      }, error => {
        console.error('Failed to save user info:', error);
      }
    );

    if (
      this.userForm.value.firstName == '' ||
      this.userForm.value.firstName == null
    ) {
      // sweet alert message
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
        icon: 'error',
        title: 'Enter your First Name',
      });
    } else if (
      this.userForm.value.lastName == '' ||
      this.userForm.value.lastName == null
    ) {
      // sweet alert message
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
        icon: 'error',
        title: 'Enter your Last Name',
      });
    } else if (
      this.userForm.value.age == '' ||
      this.userForm.value.age == null
    ) {

      // sweet alert message
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
        icon: 'error',
        title: 'Enter your Age',
      });
    } else {
      this.router.navigate(['/personalinfo', this.userName]);
      
      // sweet alert
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: 'success',
        title: 'User-info recived successfully',
      });
    }
  }

  loadRegistrationDetails(): void {
    this.registrationService.findByUserName(this.userName).subscribe(
      (data: Registration) => {
        console.log(data);
        this.registration = data;
        this.registration = {
          rid: data.rid,
          userName: data.userName,
          password: data.password,
          email: data.email,
        };
      },
      (error) => {
        console.log('Error fetching registration details:', error);
      }
    );
  }
}
