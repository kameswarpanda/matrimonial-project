import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';
import { MessagingService } from '../../services/message/message.service';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification/notification.service';
import { NotificationsComponent } from '../notifications/notifications.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, NotificationsComponent],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  isNotificationBoxVisible!: boolean;

  private previousReplies: any[] = []; // Store previously fetched replies
  hasNewNotifications: boolean = false; // Flag to indicate new notifications
  notificationInterval: any;
  notificationCount: number = 0;
  userName!: string | null;
  isFirstLogin: boolean = false; // Track if it's the first login

  constructor(private router: Router, private messagingService: MessagingService, private notificationService: NotificationService) {}

  ngOnInit(): void {

    this.notificationService.isNotificationBoxVisible$.subscribe(
      isVisible => this.isNotificationBoxVisible = isVisible
    );

    this.userName = sessionStorage.getItem('loggedInUser');
    this.isFirstLogin = sessionStorage.getItem('isFirstLogin') === 'true';

    // Check for new replies only if it's the first login
    if (this.isFirstLogin) {
      this.checkForNewReplies();
      sessionStorage.setItem('isFirstLogin', 'false'); // Update the flag after the first check
    }
  }

  checkForNewReplies(): void {
    const email = sessionStorage.getItem('loggedInUserEmail');
    if (email) {
      this.messagingService.getAllReply(email).subscribe(
        (replies) => {
          if (this.previousReplies.length !== replies.length) {
            this.hasNewNotifications = true;
            this.previousReplies = replies; // Update the stored replies
            this.showNotificationMessageRepeatedly(); // Show notification message repeatedly
          }
        },
        (error) => {
          console.error('Error fetching replies:', error);
        }
      );
    }
  }

  logOut() {
    localStorage.removeItem('authToken');

    sessionStorage.clear();

    // Clear browsing history
    window.history.pushState({}, document.title, '/');
    //sweet alert
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: 'success',
      title: 'Logout Successful',
    });

    this.router.navigate(['/home']);
  }

  myProfile() {}
  updateProfile() {}

  openModal() {}

  navigateToNotifications() {
    this.router.navigate(['/notification']);
    this.stopNotificationMessages(); // Stop notifications when bell icon is clicked
  }

  showNotificationMessageRepeatedly(): void {
    this.notificationCount = 0;
    this.notificationInterval = setInterval(() => {
      if (this.notificationCount < 5) {
        this.showNotificationMessage();
        this.notificationCount++;
      } else {
        this.stopNotificationMessages();
      }
    }, 5000); // Show notification every 15 seconds
  }

  stopNotificationMessages(): void {
    clearInterval(this.notificationInterval);
    this.notificationCount = 0;
  }

  showNotificationMessage(): void {
    if (this.hasNewNotifications) {
      Swal.fire({
        icon: 'info',
        title: 'New Notification',
        text: 'You have new notifications from admin!',
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: 'top-end'
      });
    }
  }

  onBellButtonClick(): void {
    this.navigateToNotifications();
    this.stopNotificationMessages();
  }

  toggleNotificationBox() {
    this.notificationService.toggleNotificationBox();
  }
}
