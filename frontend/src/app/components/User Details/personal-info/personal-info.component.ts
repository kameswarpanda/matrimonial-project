import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbefloginComponent } from '../../navbar/nav-components/navbeflogin/navbeflogin.component';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, RouterLinkActive, NavbefloginComponent],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  photographBloodGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.photographBloodGroupForm = this.formBuilder.group({
      photograph: [null, Validators.required],
      bloodGroup: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.photographBloodGroupForm.valid) {
      const formData = this.photographBloodGroupForm.value;
      console.log('Form submitted with data:', formData);
    } else {
      console.log('Please fill out all required fields.');
    }
  }
}
