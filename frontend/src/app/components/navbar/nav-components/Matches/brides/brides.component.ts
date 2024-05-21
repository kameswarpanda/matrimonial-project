import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BridesInfoComponent } from '../brides-info/brides-info.component';
import { NavbarComponent } from '../../../navbar.component';

@Component({
  selector: 'app-brides',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BridesInfoComponent,NavbarComponent],
  templateUrl: './brides.component.html',
  styleUrl: './brides.component.css'
})
export class BridesComponent {

}
