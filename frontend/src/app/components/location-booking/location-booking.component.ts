import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-location-booking',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './location-booking.component.html',
  styleUrl: './location-booking.component.css'
})
export class LocationBookingComponent {

}
