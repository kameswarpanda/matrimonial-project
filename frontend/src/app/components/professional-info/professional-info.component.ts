import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-professional-info',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NavbarComponent],
  templateUrl: './professional-info.component.html',
  styleUrl: './professional-info.component.css'
})
export class ProfessionalInfoComponent {
  personalInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.personalInfoForm = this.formBuilder.group({
      educationLevel: ['', Validators.required],
      educationField: ['', Validators.required]
    });
  }

  onContinue() {
    if (this.personalInfoForm.valid) {
      const formData = this.personalInfoForm.value;
      console.log('Form submitted with data:', formData);
    } else {
      console.log('Please fill out all required fields.');
    }
  }
}
