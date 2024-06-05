import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Message } from '../../models/messages/messages';
import { Reply } from '../../models/reply/reply';
import { MessagingService } from '../../services/message/message.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  messages: Reply[] = [];
  filteredMessages: Reply[] = []; // Array to store filtered messages
  isDisabled = false;
  buttonText = 'Confirm';

  constructor(private messagingService: MessagingService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.fetchMessages(); // Fetch messages when the component initializes
  }

  fetchMessages(): void {
    const email = sessionStorage.getItem('loggedInUserEmail');
    if (email) {
      this.messagingService.getAllReply(email).subscribe(
        (messages: Reply[]) => {
          this.messages = messages; // Assign the fetched messages to the messages array
          // this.filterMessages(); // Filter the messages based on the logged-in user
        },
        (error) => {
          console.error('Error fetching messages:', error);
        }
      );
    } else {
      console.error('No email found in session storage');
    }
  }

  // filterMessages(): void {
  //   const username = sessionStorage.getItem('loggedInUser'); 
  //   console.log(username);
  //   this.filteredMessages = this.messages.filter(message => message.registration.userName === username);
  //   console.log(this.filteredMessages);
  // }

  onClick() {
    this.isDisabled = true;
    this.buttonText = 'Confirmed';
    // Sweet alert
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
      title: 'Confirmation sent to User',
    });
  }

  closeNotificationBox() {
    this.notificationService.hideNotificationBox();
  }
}
