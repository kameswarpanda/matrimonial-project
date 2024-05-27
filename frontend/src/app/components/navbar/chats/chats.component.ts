import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './chats.component.html',
  styleUrl: './chats.component.css',
})
export class ChatsComponent {
  isDisabled = false;
  buttonText = 'Confirm';

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
