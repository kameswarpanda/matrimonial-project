import { Routes } from '@angular/router';
import { LoginComponent } from './components/User Details/login/login.component';
import { SignupComponent } from './components/User Details/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/navbar/nav-components/about/about.component';
import { ContactComponent } from './components/navbar/nav-components/contact/contact.component';
import { ServicesComponent } from './components/navbar/nav-components/services/services.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChatFormComponent } from './components/navbar/nav-components/chat-form/chat-form.component';
import { HomeComponent } from './components/navbar/nav-components/home/home.component';
import { ForgotComponent } from './components/User Details/forgot/forgot.component';
import { UserInfoComponent } from './components/User Details/user-info/user-info.component';
import { FamilyInfoComponent } from './components/User Details/family-info/family-info.component';
import { EducationalInfoComponent } from './components/User Details/educational-info/educational-info.component';

import { PageComponent } from './components/navbar/nav-components/page/page.component';
import { BridesInfoComponent } from './components/navbar/nav-components/Matches/brides-info/brides-info.component';
import { GroomComponent } from './components/navbar/nav-components/Matches/groom/groom.component';
import { GroomInfoComponent } from './components/navbar/nav-components/Matches/groom-info/groom-info.component';
import { BridesComponent } from './components/navbar/nav-components/Matches/brides/brides.component';
import { PersonalInfoComponent } from './components/User Details/personal-info/personal-info.component';
import { ResetpasswordComponent } from './components/User Details/resetpassword/resetpassword.component';
import { RegdReportComponent } from './components/admin/admin-control/regd-report/regd-report.component';
import { ContactReportComponent } from './components/admin/admin-control/contact-report/contact-report.component';
import { UserManagementComponent } from './components/admin/admin-control/user-management/user-management.component';
import { ChangePasswordComponent } from './components/User Details/change-password/change-password.component';
import { DashboardComponent } from './components/admin/admin-control/dashboard/dashboard.component';
import { LocationBookingReportComponent } from './components/admin/admin-control/location-booking-report/location-booking-report.component';
import { ChatsComponent } from './components/navbar/chats/chats.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'chatform', component: ChatFormComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'admin/contact-report', component: ContactReportComponent },
      { path: 'admin/user-management', component: UserManagementComponent },
      { path: 'admin/regd-report', component: RegdReportComponent },
      { path: 'admin/dashboard', component: DashboardComponent },
      { path: 'admin/location-booking', component: LocationBookingReportComponent },
    ],
  },
  { path: 'forgot', component: ForgotComponent },
  { path: 'resetpassword/:userName', component: ResetpasswordComponent },
  { path: 'userinfo/:userName', component: UserInfoComponent },
  { path: 'familyinfo/:userName', component: FamilyInfoComponent },
  { path: 'educationalinfo/:userName', component: EducationalInfoComponent },
  { path: 'personalinfo/:userName', component: PersonalInfoComponent },
  { path: 'page', component: PageComponent },
  { path: 'matches/brides/bride-info', component: BridesInfoComponent },
  { path: 'matches/grooms', component: GroomComponent },
  { path: 'matches/brides', component: BridesComponent },
  { path: 'matches/grooms/groom-info', component: GroomInfoComponent },
  { path: 'user/changepassword', component: ChangePasswordComponent },
  { path: 'chats', component: ChatsComponent },
];
