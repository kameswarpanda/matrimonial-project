import { Routes } from '@angular/router';
import { LoginComponent } from './components/User Details/login/login.component';
import { SignupComponent } from './components/User Details/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/navbar/nav-components/about/about.component';
import { ContactComponent } from './components/navbar/nav-components/contact/contact.component';
import { ServicesComponent } from './components/navbar/nav-components/services/services.component';
import { AdminComponent } from './components/navbar/nav-components/admin/admin.component';
import { LocationBookingComponent } from './components/navbar/nav-components/location-booking/location-booking.component';
import { HomeComponent } from './components/navbar/nav-components/home/home.component';
import { ForgotComponent } from './components/User Details/forgot/forgot.component';
import { UserInfoComponent } from './components/User Details/user-info/user-info.component';
import { FamilyInfoComponent } from './components/User Details/family-info/family-info.component';
import { EducationalInfoComponent } from './components/User Details/educational-info/educational-info.component';
import { CasteInfoComponent } from './components/User Details/caste-info/caste-info.component';
import { PageComponent } from './components/navbar/nav-components/page/page.component';
import { BridesInfoComponent } from './components/navbar/nav-components/Matches/brides-info/brides-info.component';
import { GroomComponent } from './components/navbar/nav-components/Matches/groom/groom.component';
import { GroomInfoComponent } from './components/navbar/nav-components/Matches/groom-info/groom-info.component';
import { BridesComponent } from './components/navbar/nav-components/Matches/brides/brides.component';
import { PersonalInfoComponent } from './components/User Details/personal-info/personal-info.component';
import { ResetpasswordComponent } from './components/User Details/resetpassword/resetpassword.component';


export const routes: Routes = [
    { path: "", component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'navbar', component: NavbarComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'forgot', component: ForgotComponent},
    { path: 'resetpassword', component: ResetpasswordComponent},
    { path: 'loctaionbooking', component: LocationBookingComponent },
    { path: 'userinfo', component: UserInfoComponent },
    { path: 'familyinfo', component: FamilyInfoComponent },
    { path: 'educationalinfo', component: EducationalInfoComponent },
    { path: 'casteinfo', component: CasteInfoComponent },
    { path: 'personalinfo', component: PersonalInfoComponent },
    { path: 'page', component: PageComponent },
    { path: 'matches/brides/bride-info', component: BridesInfoComponent },
    { path: 'matches/grooms', component: GroomComponent},
    { path: 'matches/brides', component: BridesComponent},
    { path: 'matches/grooms/groom-info', component: GroomInfoComponent},
    
];
