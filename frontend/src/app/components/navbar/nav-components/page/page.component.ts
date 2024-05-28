import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive,  } from '@angular/router';
import { NavbarComponent } from '../../navbar.component';

import { BridesInfoComponent } from '../Matches/brides-info/brides-info.component';
import { UserInfoService } from '../../../../services/userinfo/userinfo.service';
import { EducationCareerService } from '../../../../services/education-level/education-level.service';
import { FamilyInfoService } from '../../../../services/family-info/family-info.service';
import { PersonalInfoService } from '../../../../services/personal-info/personal-info.service';

import { forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [RouterLink, PageComponent, NavbarComponent, CommonModule, BridesInfoComponent, RouterLinkActive],
  templateUrl: './page.component.html',
  styleUrl: './page.component.css'
})
export class PageComponent implements OnInit{
  personalInfo: any = [];
  users: any = [];
  educationInfo: any = [];
  familyInfo: any = [];

  constructor(
    private userService: UserInfoService,
    private educationCareerService: EducationCareerService,
    private familyInfoService: FamilyInfoService,
    private personalInfoService: PersonalInfoService,
    private router : Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    personalInfos: this.personalInfoService.getAllPersonalInfo();

    forkJoin({
      userInfo: this.userService.getAllUserInfo(),
      educationCareers: this.educationCareerService.getAllEducationInfo(),
      familyInfos: this.familyInfoService.getAllFamilyInfo(),
      personalInfos: this.personalInfoService.getAllPersonalInfo(),
    }).subscribe(
      ({ userInfo, educationCareers, familyInfos, personalInfos }) => {
        this.users = userInfo
          .filter((userInfo) => userInfo.gender === 'female')
          .map((user) => {
            const educationCareer = educationCareers.find(
              (ec) => ec.registration.rid === user.registration.rid
            );
            const familyInfo = familyInfos.find(
              (fi) => fi.registration.rid === user.registration.rid
            );
            const personalInfo = personalInfos.find(
              (pi) => pi.registration.rid === user.registration.rid
            );
            return {
              firstName: user.firstName,
              lastName: user.lastName,
              age: user.age,
              gender: user.gender,
              educationCareer: {
                educationLevel:
                  educationCareer?.educationLevel || 'Not available',
                educationField:
                  educationCareer?.educationField || 'Not available',
              },
              familyInfo: {
                familyStatus: familyInfo?.familyStatus || 'Not available',
                familyType: familyInfo?.familyType || 'Not available',
                fatherName: familyInfo?.fatherName || 'Not available',
              },
              personalInfo: personalInfo || null,
            };
          });
      }
    );
  }

  viewDetails(user: any): void {
    this.router.navigate(['/matches/brides/bride-info'], {
      state: { user },
    });
  }
}
