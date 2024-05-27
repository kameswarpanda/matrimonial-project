import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../navbar.component';

@Component({
  selector: 'app-chat-form',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './chat-form.component.html',
  styleUrl: './chat-form.component.css'
})
export class ChatFormComponent {

}
