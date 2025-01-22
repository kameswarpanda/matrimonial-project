import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../../navbar.component';
import Swal from 'sweetalert2';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-groom-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NavbarComponent ],
  templateUrl: './groom-info.component.html',
  styleUrl: './groom-info.component.css'
})
export class GroomInfoComponent implements OnInit{
 
  user!: any;
  loggedInUser: string | null = null;

  constructor(
    private router : Router
  ) {}
  ngOnInit(): void {
    this.user = history.state.user;
    this.loggedInUser = sessionStorage.getItem('loggedInUser');
  }
  chatBtnDisabled = true;
  interestBtnDisabled = false;
  intrestButton = 'Share Interest';

  OnChatClick(){
    this.router.navigate(['/chatform'], {
      state: { user: this.user }
    });
  }


  onClick(e:Event){
    this.chatBtnDisabled = false;
    this.interestBtnDisabled = true;
    this.intrestButton = 'Interest Shared';

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
      title: 'Interest Shared Successfully',
    });

    //Email verification
    const form = document.getElementById('interestForm') as HTMLFormElement;
    emailjs.sendForm('service_b33wh5w', 'template_rv04sb5', form, 'TiPMp9coe69l6TC0y')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error: EmailJSResponseStatus) => {
          console.log('FAILED...', error.text);
        }
      );
  }
}
