import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './login-navbar.component.html',
  styleUrl: './login-navbar.component.css'
})
export class LoginNavbarComponent {

}
