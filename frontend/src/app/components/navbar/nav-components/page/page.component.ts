import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive,  } from '@angular/router';
import { NavbarComponent } from '../../navbar.component';

import { BridesInfoComponent } from '../Matches/brides-info/brides-info.component';
import { UserInfoService } from '../../../../services/userinfo/userinfo.service';
import { EducationCareerService } from '../../../../services/education-level/education-level.service';
import { FamilyInfoService } from '../../../../services/family-info/family-info.service';
import { PersonalInfoService } from '../../../../services/personal-info/personal-info.service';

import { Observable, forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Registration } from '../../../../models/registration/registration';
import { RegistrationService } from '../../../../services/registration/registration.service';
import { UserInfo } from '../../../../models/userinfo/userinfo';

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
  loggedInUser: string | null = null;
  registration: any;
  allUserInfo!: any[];
  gender: any;

  constructor(
    private userService: UserInfoService,
    private registrationService: RegistrationService,
    private educationCareerService: EducationCareerService,
    private familyInfoService: FamilyInfoService,
    private personalInfoService: PersonalInfoService,
    private router : Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    personalInfos: this.personalInfoService.getAllPersonalInfo();
    this.loggedInUser = sessionStorage.getItem('loggedInUser');
    
    this.registration = this.loadRegistrationDetails();


    console.log(this.allUserInfo)

    this.userService.getAllUserInfo().subscribe(
      (userInfo: any[]) => {
        this.allUserInfo = userInfo;
        console.log(this.allUserInfo)
        for (const userInfo of this.allUserInfo) {
          if (userInfo.registration.userName === this.loggedInUser) {
            this.gender = userInfo.gender;
            console.log(this.gender)
    
            break;
          }
        }
        
        forkJoin({
          userInfo: this.userService.getAllUserInfo(),
          educationCareers: this.educationCareerService.getAllEducationInfo(),
          familyInfos: this.familyInfoService.getAllFamilyInfo(),
          personalInfos: this.personalInfoService.getAllPersonalInfo(),
        }).subscribe(
          ({ userInfo, educationCareers, familyInfos, personalInfos }) => {
            console.log(this.gender)
            if(this.gender == 'male'){
            this.users = userInfo
              .filter(userInfo => userInfo.gender === 'female')
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
                  registration: user.registration,
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
            } else {
              this.users = userInfo
              .filter(userInfo => userInfo.gender === 'male')
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
                  registration: user.registration,
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
          }
        );
      },
      (error) => {
        console.error('Error fetching user info:', error);
      }
    );
  }
  

  viewDetails(user: any): void {
    if(this.gender == 'male'){
      this.router.navigate(['/matches/brides/bride-info'], {
        state: { user },
      });
    } else {
      this.router.navigate(['/matches/grooms/groom-info'], {
        state: { user },
      });
    }

  }

  loadRegistrationDetails(): void {
    const loggedInUserName: string = this.loggedInUser !== null ? this.loggedInUser : '';
    this.registrationService.findByUserName(loggedInUserName).subscribe(
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
