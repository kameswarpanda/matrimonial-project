import { Component, OnInit } from '@angular/core';
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
  ActivatedRoute,
  
} from '@angular/router';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';
import { RegistrationService } from '../../../services/registration/registration.service';
import { Registration } from '../../../models/registration/registration';
import { PersonalInfoService } from '../../../services/personal-info/personal-info.service';

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
export class PersonalInfoComponent implements OnInit{
  photographBloodGroupForm: FormGroup;
  userName! : string ;
  registration!: Registration
  personalInfo!: any;
  selectedFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private registrationService: RegistrationService,
    private personalInfoService: PersonalInfoService,
    private route: ActivatedRoute
    
  ) {
    this.photographBloodGroupForm = this.formBuilder.group({
      photograph: [null, Validators.required],
      bloodGroup: ['', Validators.required],
    });
  }

  ngOnInit(): void {

    this.userName = this.route.snapshot.paramMap.get('userName') ?? "";

    this.loadRegistrationDetails();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    this.personalInfo = {
      photograph: this.selectedFile as Blob,
      bloodGroup: this.photographBloodGroupForm.value.bloodGroup,
      registration: this.registration,
    };

    if (this.photographBloodGroupForm.valid) {
      
      // this.router.navigate(['/educationalinfo', this.userName]);
      this.personalInfoService.savePersonalInfo(this.personalInfo).subscribe(
        (response) => {
          console.log('Personal-info received successfully');
          this.router.navigate(['/educationalinfo', this.userName]);
        },
        (error) => {
          console.error('Failed to save personal info:', error);
          console.log('Failed to save personal info.');
        }
      );
      
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
