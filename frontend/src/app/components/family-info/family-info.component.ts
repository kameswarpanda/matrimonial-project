import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-family-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule, NavbarComponent],
  templateUrl: './family-info.component.html',
  styleUrl: './family-info.component.css'
})
export class FamilyInfoComponent {
  familyInfoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.familyInfoForm = this.formBuilder.group({
      familyStatus: ['', Validators.required],
      familyType: ['', Validators.required],
      familyName: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.familyInfoForm.valid) {
      console.log('submitted');
    } else {
      console.log('Please fill out all required fields.');
    }
  }
}
