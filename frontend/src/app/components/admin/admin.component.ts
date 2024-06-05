import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet, Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { RegdReportComponent } from './admin-control/regd-report/regd-report.component';
import { UserManagementComponent } from './admin-control/user-management/user-management.component';
import { ContactReportComponent } from './admin-control/contact-report/contact-report.component';
import { DashboardComponent } from './admin-control/dashboard/dashboard.component';
import Swal from 'sweetalert2';
import { LocationBookingReportComponent } from './admin-control/location-booking-report/location-booking-report.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, NavbarComponent, RouterOutlet, RegdReportComponent, UserManagementComponent, ContactReportComponent, DashboardComponent, LocationBookingReportComponent, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {

  selectedButton: number = 1;

  selectButton(buttonNumber: number) {
    this.selectedButton = buttonNumber;
  }

  constructor(private router: Router){}

  onLogout() {
    // Clear session storage
    sessionStorage.clear();

    // Redirect to login page
    this.router.navigate(['/']);
    // Show success alert
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Admin Logout Successful',
    });
  }
  
}
