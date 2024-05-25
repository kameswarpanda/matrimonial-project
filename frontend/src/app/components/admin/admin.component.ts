import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { RegdReportComponent } from './admin-control/regd-report/regd-report.component';
import { UserManagementComponent } from './admin-control/user-management/user-management.component';
import { ContactReportComponent } from './admin-control/contact-report/contact-report.component';
import { DashboardComponent } from './admin-control/dashboard/dashboard.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink, NavbarComponent, RouterOutlet, RegdReportComponent, UserManagementComponent, ContactReportComponent, DashboardComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {}
