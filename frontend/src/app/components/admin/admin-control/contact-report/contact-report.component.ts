import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../../../services/contact-info/contact.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegistrationService } from '../../../../services/registration/registration.service';

@Component({
  selector: 'app-contact-report',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './contact-report.component.html',
  styleUrls: ['./contact-report.component.css'] // Note the correction to styleUrls
})
export class ContactReportComponent implements OnInit {
  contactData: any[] = []; // Assuming contact data is an array of objects with properties: name, email, message

  constructor(private contactService: ContactService, private router: Router,
    private registrationService : RegistrationService
  ) {}

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

  handleAction(contact: any) {
    // Check if email is registered
    this.registrationService.findByEmail(contact.email).subscribe(
      (isRegistered: boolean) => {
        if (isRegistered) {
          // Navigate to a different component with a form
          this.router.navigate(['admin/admin/form'], { queryParams: { name: contact.name, email: contact.email } });
        } else {
          // Redirect to Gmail compose mail page
          const mailtoLink = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${contact.email}`;
          window.open(mailtoLink, '_blank');
        }
      },
      (error) => {
        console.error('Error checking registration:', error);
        // Handle the error as needed, maybe default to mailto link
        const mailtoLink = `https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=${contact.email}`;
        window.open(mailtoLink, '_blank');
      }
    );
  }
}
