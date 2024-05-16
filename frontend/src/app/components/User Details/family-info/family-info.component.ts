import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';
import { Registration } from '../../../models/registration/registration';
import { FamilyInfoService } from '../../../services/family-info/family-info.service';
import { RegistrationService } from '../../../services/registration/registration.service';
import { FamilyInfo } from '../../../models/family-info/family-info';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';

@Component({
  selector: 'app-family-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, NavbarComponent, NavbefloginComponent],
  templateUrl: './family-info.component.html',
  styleUrl: './family-info.component.css'
})
export class FamilyInfoComponent implements OnInit{

  // familyInfoForm: FormGroup;

  // constructor(private formBuilder: FormBuilder) {
  //   this.familyInfoForm = this.formBuilder.group({
  //     familyStatus: ['', Validators.required],
  //     familyType: ['', Validators.required],
  //     familyName: ['', Validators.required]
  //   });
  // }

  // onSubmit() {
  //   if (this.familyInfoForm.valid) {
  //     console.log('submitted');
  //   } else {
  //     console.log('Please fill out all required fields.');
  //   }
  // }

  familyInfoForm!: FormGroup;
  registration!: Registration;
  rid!: number;

  constructor(private formBuilder: FormBuilder, 
    private router: Router,
    private familyInfoService: FamilyInfoService,
    private registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.familyInfoForm = this.formBuilder.group({
      familyStatus: ['', Validators.required],
      familyType: ['', Validators.required],
      fatherName: ['', Validators.required]
    });

    this.rid = this.registrationService.getrid();
    this.loadRegistrationDetails();
  }

  onSubmit(e: Event) {
    const familyInfo: FamilyInfo = {
      registration: this.registration,
      familyStatus: this.familyInfoForm.value.familyStatus,
      familyType: this.familyInfoForm.value.familyType,
      fatherName: this.familyInfoForm.value.fatherName
    };

    this.familyInfoService.addFamilyInfo(familyInfo)
      .subscribe(
        (response) => {
          console.log('Successfully submitted:', response);
          // this.router.navigate(['/next-route']);
        },
        (error) => {
          console.error('Error:', error);
          // Handle error response
        }
      );

      
      emailjs
      .sendForm('service_hksa34h', 'template_xt58p0e', e.target as HTMLFormElement , {
        publicKey: 'yoF2P1NACJyTjTxOS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
      alert('Check your email and verify your account, press OK to proceed. ')
  }

  loadRegistrationDetails(): void {
    this.registrationService.getRegistrationById(this.rid)
      .subscribe(
        (data: Registration) => {
          this.registration = data;
        },
        error => {
          console.log('Error fetching registration details:', error);
        }
      );
  }
}
