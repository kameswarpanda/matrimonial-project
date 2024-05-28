import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../../../services/registration/registration.service';

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

  constructor(private registrationService: RegistrationService) {}

  ngOnInit() {
    this.fetchDashboardData();
  }

  fetchDashboardData() {
    this.registrationService.getAllRegistrations().subscribe(
      (registrations: any[]) => {
        // Calculate total number of grooms, brides, and registrations
        this.totalGrooms = registrations.filter(reg => reg.gender === 'Male').length;
        this.totalBrides = registrations.filter(reg => reg.gender === 'Female').length;
        this.totalRegistrations = registrations.length;
      },
      (error) => {
        console.error('Error fetching dashboard data:', error);
      }
    );
  }

}
