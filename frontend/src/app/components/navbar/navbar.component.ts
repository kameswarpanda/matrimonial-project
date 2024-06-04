import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})


export class NavbarComponent implements OnInit{

  
  
  userName!: string | null;
  ngOnInit(): void {

    this.userName = sessionStorage.getItem('loggedInUser');
  }

  logOut() {
    localStorage.removeItem('authToken');
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
  }

  myProfile(){}
  updateProfile(){}
  
  openModal(){

  }

}
