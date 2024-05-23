import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../../navbar.component';


@Component({
  selector: 'app-groom-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NavbarComponent ],
  templateUrl: './groom-info.component.html',
  styleUrl: './groom-info.component.css'
})
export class GroomInfoComponent implements OnInit{
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
}
