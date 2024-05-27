import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar.component';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css'
})
export class ChatsComponent {

}
