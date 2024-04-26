import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { AdminComponent } from './components/admin/admin.component';
import { LocationBookingComponent } from './components/location-booking/location-booking.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotComponent } from './components/forgot/forgot.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'forgot', component: ForgotComponent},
    { path: 'loctaionbooking', component: LocationBookingComponent },
    
];
