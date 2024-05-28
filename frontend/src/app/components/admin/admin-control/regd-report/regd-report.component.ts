import { Component } from '@angular/core';
import { RegistrationService } from '../../../../services/registration/registration.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-regd-report',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './regd-report.component.html',
  styleUrl: './regd-report.component.css'
})
export class RegdReportComponent {

  regdData: any[] = []; // Assuming contact data is an array of objects with properties: name, email, message

  constructor(private registrationsService: RegistrationService) {}

  ngOnInit() {
    this.fetchRegdData();
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
}
