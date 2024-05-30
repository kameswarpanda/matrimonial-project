import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/User Details/login/login.component';
import { HomeComponent } from './components/navbar/nav-components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgotComponent } from './components/User Details/forgot/forgot.component';
import { FamilyInfoComponent } from './components/User Details/family-info/family-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PageComponent } from './components/navbar/nav-components/page/page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    ForgotComponent,
    FamilyInfoComponent,
    PageComponent,
    FontAwesomeModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'matrimonial-project';

  onActive(event: any) {
    if (typeof window !== 'undefined') {
      window.scroll(0, 0);
    }
  }
}
