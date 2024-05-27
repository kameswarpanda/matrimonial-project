import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../navbar.component';
import Swal from 'sweetalert2';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  onClick(){
    //sweetalert
    const Toast = Swal.mixin({
      toast: true,
      position: 'center-end',
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
      title: 'We recived your Query, We will reply as soon as possbile.',
    });

  }

}
