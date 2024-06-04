import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationService } from '../../../../services/registration/registration.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserInfoService } from '../../../../services/userinfo/userinfo.service';
import { EducationCareerService } from '../../../../services/education-level/education-level.service';
import { FamilyInfoService } from '../../../../services/family-info/family-info.service';
import { PersonalInfoService } from '../../../../services/personal-info/personal-info.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css',
})
export class UserManagementComponent {
  personalInfo: any = [];
  users: any = [];
  educationInfo: any = [];
  familyInfo: any = [];

  // Assuming contact data is an array of objects with properties: name, email, message
  regdData: any[] = [];
  
  constructor(
    private registrationsService: RegistrationService,
    private router: Router,
    private userService: UserInfoService,
    private educationCareerService: EducationCareerService,
    private familyInfoService: FamilyInfoService,
    private personalInfoService: PersonalInfoService,
  ) {}

  ngOnInit() {
    this.fetchRegdData();
    // this.registration = this.loadRegistrationDetails();

    personalInfos: this.personalInfoService.getAllPersonalInfo()
    

    forkJoin({
      regdInfo: this.registrationsService.getAllRegistrations(),
      userInfo: this.userService.getAllUserInfo(),
      educationCareers: this.educationCareerService.getAllEducationInfo(),
      familyInfos: this.familyInfoService.getAllFamilyInfo(),
      personalInfos: this.personalInfoService.getAllPersonalInfo()
    }).subscribe(({userInfo, educationCareers, familyInfos, personalInfos }) => {
      this.users = userInfo.map(user => {
        const educationCareer = educationCareers.find(ec => ec.registration.rid === user.registration.rid);
        const familyInfo = familyInfos.find(fi => fi.registration.rid === user.registration.rid);
        const personalInfo = personalInfos.find(pi => pi.registration.rid === user.registration.rid);
        return {
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          gender: user.gender,
          email: user.registration.email,
          id: user.registration.rid,
          educationCareer: {
            educationLevel: educationCareer?.educationLevel || 'Not available',
            educationField: educationCareer?.educationField || 'Not available'
          },
          familyInfo: {
            familyStatus: familyInfo?.familyStatus || 'Not available',
            familyType: familyInfo?.familyType || 'Not available',
            fatherName: familyInfo?.fatherName || 'Not available'
          },
          personalInfo: personalInfo || null
        };
      });
    });

  }

  fetchRegdData() {
    this.registrationsService.getAllRegistrations().subscribe(
      (data: any[]) => {
        this.regdData = data;
      },
      (error) => {
        console.error('Error fetching contact data:', error);
      }
    );
  }

  //for delete user from admin panel
  deleteUser(event: any, rid: number) {
    if (confirm('Are you sure you want to delete this data')) {
      event.target.innerText = 'Deleting...';
      this.registrationsService.deleteUser(rid).subscribe((res: any) => {
        alert('User deleted successfully');
      });
    }
  }

  //To view User info
  viewDetails(user: any): void {
    console.log(user.email);
    this.router.navigate(['/matches/brides/bride-info'], {
      state: { user },
    });
  }
}
