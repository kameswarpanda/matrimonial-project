import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../../navbar.component';


@Component({
  selector: 'app-brides-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavbarComponent],
  templateUrl: './brides-info.component.html',
  styleUrl: './brides-info.component.css'
})
export class BridesInfoComponent {

}
