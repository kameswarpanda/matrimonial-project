import { Component } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UpdateEducationalInfoComponent } from './update-control/update-educationalInfo/update-educational-info/update-educational-info.component';
import { UpdateUserInfoComponent } from './update-control/update-userInfo/update-user-info/update-user-info.component';
import { UpdatePersonalInfoComponent } from './update-control/update-personalInfo/update-personal-info/update-personal-info.component';
import { UpdateFamilyInfoComponent } from './update-control/update-familyInfo/update-family-info/update-family-info.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, RouterLink,RouterLinkActive, UpdatePersonalInfoComponent, UpdateEducationalInfoComponent, UpdateUserInfoComponent, UpdateFamilyInfoComponent, CommonModule,  FormsModule, ReactiveFormsModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {

}
