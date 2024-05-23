import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../../navbar.component';


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
}
