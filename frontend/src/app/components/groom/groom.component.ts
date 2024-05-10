import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { LoginNavbarComponent } from '../../login-navbar/login-navbar.component';

@Component({
  selector: 'app-groom',
  standalone: true,
  imports: [RouterLink, LoginNavbarComponent],
  templateUrl: './groom.component.html',
  styleUrl: './groom.component.css'
})
export class GroomComponent {

}
