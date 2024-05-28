import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationService } from '../../../../services/registration/registration.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {
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

  //for delete user from admin panel
  deleteUser(event:any, username:String){
      if(confirm('Are you sure you want to delete this data')){
        event.target.innerText = "Deleting..."
        this.registrationsService.destroyUser(username).subscribe((res:any) => {
          this.fetchRegdData();
          alert('User deleted successfully');
        });
      }
  }
}
