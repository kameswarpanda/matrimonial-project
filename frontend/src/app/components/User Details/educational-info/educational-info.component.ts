import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-educational-info',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NavbarComponent],
  templateUrl: './educational-info.component.html',
  styleUrl: './educational-info.component.css'
})
export class EducationalInfoComponent {
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
      alert('Please fill out all required fields.');
    }
  }
}
