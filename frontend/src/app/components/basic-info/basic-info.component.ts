import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-basic-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css'
})
export class BasicInfoComponent {
  userInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.userInfoForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.userInfoForm.valid) {
      const formData = this.userInfoForm.value;
      console.log('Form submitted with data:', formData);
      // Here you can proceed with sending the form data to your server or performing any other actions
    } else {
      console.log('Please fill out all required fields.');
    }
  }
}
