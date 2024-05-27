import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../../navbar.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-brides-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavbarComponent],
  templateUrl: './brides-info.component.html',
  styleUrl: './brides-info.component.css'
})
export class BridesInfoComponent implements OnInit{
  user!: any;

  constructor(
    private router : Router
  ) {}
  ngOnInit(): void {
    this.user = history.state.user;
    // if (!this.user) {
    //   this.router.navigate(['/matches/brides']);
    // }
  }
  chatBtnDisabled = true;
  interestBtnDisabled = false;
  intrestButton = 'Share Interest';
  onClick(){
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

    //for Email notifictaion used(Email JS)
  }
}
