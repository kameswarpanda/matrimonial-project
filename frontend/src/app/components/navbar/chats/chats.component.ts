import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar.component';
import Swal from 'sweetalert2';
import { Message } from '../../../models/messages/messages';
import { MessagingService } from '../../../services/message/message.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css',
})
export class ChatsComponent {
  messages: Message[] = [];
  filteredMessages: Message[] = []; // Array to store filtered messages
  isDisabled = false;
  buttonText = 'Confirm';

  constructor(private messagingService: MessagingService) {}

  ngOnInit(): void {
    this.fetchMessages(); // Fetch messages when the component initializes
  }

  fetchMessages(): void {
    this.messagingService.getAllMessages().subscribe(
      (messages: Message[]) => {
        this.messages = messages; // Assign the fetched messages to the messages array
        this.filterMessages(); // Filter the messages based on the logged-in user
      },
      (error) => {
        console.error('Error fetching messages:', error);
      }
    );
  }

  filterMessages(): void {
    const username = sessionStorage.getItem('loggedInUser'); 
    if (username) {
      this.filteredMessages = this.messages.filter(message => message.registration.userName === username);
    } else {
      console.error('No logged-in user found');
    }
  }
  onClick() {
    this.isDisabled = true;
    this.buttonText = 'Confirmed';
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
      title: 'Confirmation sent to User',
    });

    //for Email notifictaion used(Email JS)
  }
}
