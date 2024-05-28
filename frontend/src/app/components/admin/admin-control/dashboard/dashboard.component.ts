import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../../services/registration/registration.service';
import { UserInfoService } from '../../../../services/userinfo/userinfo.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  totalGrooms: number = 0;
  totalBrides: number = 0;
  totalRegistrations: number = 0;

  constructor(private registrationService: RegistrationService,
    private userInfoService: UserInfoService,
  ) {}

  ngOnInit() {
    this.fetchDashboardData();
  }

  fetchDashboardData() {
    
    this.userInfoService.getAllUserInfo().subscribe(
      (userInfo: any[]) => {
        // Calculate total number of grooms, brides, and registrations
        this.totalGrooms = userInfo.filter(reg => reg.gender === 'male').length;
        this.totalBrides = userInfo.filter(reg => reg.gender === 'female').length;
        this.totalRegistrations = userInfo.length;
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
      }
    );
  }

}
