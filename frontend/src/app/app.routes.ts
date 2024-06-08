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
import { FormComponent } from './components/admin/admin-control/form/form.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { authGuard } from './components/guards/auth.guard';
import { UpdateProfileComponent } from './components/User Details/update-profile/update-profile/update-profile.component';
import path from 'path';
import { UpdateUserInfoComponent } from './components/User Details/update-profile/update-profile/update-control/update-userInfo/update-user-info/update-user-info.component';
import { UpdatePersonalInfoComponent } from './components/User Details/update-profile/update-profile/update-control/update-personalInfo/update-personal-info/update-personal-info.component';
import { UpdateEducationalInfoComponent } from './components/User Details/update-profile/update-profile/update-control/update-educationalInfo/update-educational-info/update-educational-info.component';
import { UpdateFamilyInfoComponent } from './components/User Details/update-profile/update-profile/update-control/update-familyInfo/update-family-info/update-family-info.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'navbar', component: NavbarComponent, canActivate: [authGuard] },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'about', component: AboutComponent, canActivate: [authGuard] },
  { path: 'contact', component: ContactComponent, canActivate: [authGuard] },
  { path: 'chatform', component: ChatFormComponent, canActivate: [authGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [authGuard] },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'admin/contact-report',
        component: ContactReportComponent,
        canActivate: [authGuard],
      },
      {
        path: 'admin/user-management',
        component: UserManagementComponent,
        canActivate: [authGuard],
      },
      {
        path: 'admin/regd-report',
        component: RegdReportComponent,
        canActivate: [authGuard],
      },
      {
        path: 'admin/dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'admin/location-booking',
        component: LocationBookingReportComponent,
        canActivate: [authGuard],
      },
      {
        path: 'admin/form',
        component: FormComponent,
        canActivate: [authGuard],
      },
    ],
  },
  { path: 'forgot', component: ForgotComponent },
  { path: 'resetpassword/:userName', component: ResetpasswordComponent },
  { path: 'userinfo/:userName', component: UserInfoComponent },
  { path: 'familyinfo/:userName', component: FamilyInfoComponent },
  { path: 'educationalinfo/:userName', component: EducationalInfoComponent },
  { path: 'personalinfo/:userName', component: PersonalInfoComponent },
  { path: 'page', component: PageComponent, canActivate: [authGuard] },
  {
    path: 'matches/brides/bride-info',
    component: BridesInfoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'matches/grooms',
    component: GroomComponent,
    canActivate: [authGuard],
  },
  {
    path: 'matches/brides',
    component: BridesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'matches/grooms/groom-info',
    component: GroomInfoComponent,
    canActivate: [authGuard],
  },
  {
    path: 'user/changepassword',
    component: ChangePasswordComponent,
    canActivate: [authGuard],
  },
  { path: 'chats', component: ChatsComponent, canActivate: [authGuard] },
  {
    path: 'update-profile',
    component: UpdateProfileComponent, canActivate: [authGuard],
    children: [
      { path: 'update-userInfo', component: UpdateUserInfoComponent, canActivate: [authGuard] },
      { path: 'update-personalInfo', component: UpdatePersonalInfoComponent, canActivate: [authGuard] },
      {
        path: 'update-educationalInfo',
        component: UpdateEducationalInfoComponent, canActivate: [authGuard]
      },
      { path: 'update-familyInfo', component: UpdateFamilyInfoComponent, canActivate: [authGuard] },
    ],
  },
  {
    path: 'notification',
    component: NotificationsComponent,
    canActivate: [authGuard],
  },
];
