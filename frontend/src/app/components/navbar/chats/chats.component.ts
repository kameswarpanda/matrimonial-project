import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar.component';
import Swal from 'sweetalert2';
import { Message } from '../../../models/messages/messages';
import { MessagingService } from '../../../services/message/message.service';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css',
})
export class ChatsComponent implements OnInit{
  messages: Message[] = [];
  filteredMessages: Message[] = []; // Array to store filtered messages
  isDisabled = false;
  buttonText = 'Reply';

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
    console.log(username)
      this.filteredMessages = this.messages.filter(message => message.registration.userName == username);

      console.log(this.filteredMessages)
  }
  onClick() {
    // this.isDisabled = true;
    // this.buttonText = 'Replyed';
  }
}
