import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../../navbar.component';


@Component({
  selector: 'app-groom-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,NavbarComponent ],
  templateUrl: './groom-info.component.html',
  styleUrl: './groom-info.component.css'
})
export class GroomInfoComponent {

}
