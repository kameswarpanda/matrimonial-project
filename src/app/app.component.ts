import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { FamilyInfoComponent } from './components/family-info/family-info.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PageComponent } from './components/page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LoginComponent, HomeComponent, FooterComponent, ForgotComponent, FamilyInfoComponent, MatchesComponent, PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'matrimonial-project';
}
