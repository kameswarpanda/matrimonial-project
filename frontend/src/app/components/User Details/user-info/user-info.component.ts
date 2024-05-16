import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import { UserInfoService } from '../../../services/userinfo/userinfo.service';
import { RegistrationService } from '../../../services/registration/registration.service';
import { Registration } from '../../../models/registration/registration';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavbefloginComponent,  ReactiveFormsModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.css'
})
export class UserInfoComponent implements OnInit{

  userInfo: any;
  userForm!: FormGroup;
  rid: number = 2; 
  registration: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userInfoService: UserInfoService,
    private registrationService: RegistrationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required]
    });


  // Log the value of rid when BasicInfoComponent is initialized
  console.log('RID in BasicInfoComponent ngOnInit:', this.rid);

  // Retrieve the rid from RegistrationService
  this.rid = this.registrationService.getrid();
  console.log('RID retrieved from RegistrationService:', this.rid, typeof this.rid);
    this.loadRegistrationDetails();
  }

  onSubmit() {
    this.userInfo = {
      firstName: this.userForm.value.firstName,
      lastName: this.userForm.value.lastName,
      age: this.userForm.value.age,
      registration: this.registration
    }
    
    this.userInfoService.saveUserInfo(this.userInfo)
      .subscribe(response => {
        console.log('User info saved successfully:', response);
        this.router.navigate(['/personalinfo']);
      }, error => {
        console.error('Failed to save user info:', error);
      });


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
