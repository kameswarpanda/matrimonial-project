import { Component } from '@angular/core';
import { ContactService } from '../../../../services/contact-info/contact.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-report',
  standalone: true,
  imports: [CommonModule,RouterLink, RouterLinkActive],
  templateUrl: './contact-report.component.html',
  styleUrl: './contact-report.component.css'
})
export class ContactReportComponent {
  contactData: any[] = []; // Assuming contact data is an array of objects with properties: name, email, message

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.fetchContactData();
  }

  fetchContactData() {
    this.contactService.getAllContacts().subscribe(
      (data: any[]) => {
        this.contactData = data;
      },
      (error) => {
        console.error('Error fetching contact data:', error);
      }
    );
  }
}
