import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { BridesInfoComponent } from '../brides-info/brides-info.component';
import { NavbarComponent } from '../../../navbar.component';
import { UserInfoService } from '../../../../../services/userinfo/userinfo.service';
import { EducationCareerService } from '../../../../../services/education-level/education-level.service';
import { FamilyInfoService } from '../../../../../services/family-info/family-info.service';
import { PersonalInfoService } from '../../../../../services/personal-info/personal-info.service';
import { Combineduser } from '../../../../../models/combineduser/combineduser';
import { forkJoin } from 'rxjs';
import { Registration } from '../../../../../models/registration/registration';
import { CommonModule } from '@angular/common';
import { userInfo } from 'os';
import { RegistrationService } from '../../../../../services/registration/registration.service';

@Component({
  selector: 'app-brides',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive, BridesInfoComponent,NavbarComponent],
  templateUrl: './brides.component.html',
  styleUrl: './brides.component.css'
})
export class BridesComponent implements OnInit{
  personalInfo: any = [];
  users: any = [];
  educationInfo: any = [];
  familyInfo: any = [];



  constructor(
    private registrationService: RegistrationService,
    private userService: UserInfoService,
    private educationCareerService: EducationCareerService,
    private familyInfoService: FamilyInfoService,
    private personalInfoService: PersonalInfoService,
    private router : Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    personalInfos: this.personalInfoService.getAllPersonalInfo()
    

    forkJoin({
      userInfo: this.userService.getAllUserInfo(), 
      educationCareers: this.educationCareerService.getAllEducationInfo(),
      familyInfos: this.familyInfoService.getAllFamilyInfo(),
      personalInfos: this.personalInfoService.getAllPersonalInfo()
    }).subscribe(({userInfo, educationCareers, familyInfos, personalInfos }) => {
      this.users = userInfo.filter(userInfo => userInfo.gender === 'female').map(user => {
        const educationCareer = educationCareers.find(ec => ec.registration.rid === user.registration.rid);
        const familyInfo = familyInfos.find(fi => fi.registration.rid === user.registration.rid);
        const personalInfo = personalInfos.find(pi => pi.registration.rid === user.registration.rid);
        return {
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age,
          gender: user.gender,
          email: user.registration.email,
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

  viewDetails(user: any): void {
    console.log(user.email)
    this.router.navigate(['/matches/brides/bride-info'], {
      state: { user }
    });

}
}
