import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { BridesInfoComponent } from '../brides-info/brides-info.component';

@Component({
  selector: 'app-brides',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, BridesInfoComponent],
  templateUrl: './brides.component.html',
  styleUrl: './brides.component.css'
})
export class BridesComponent {

}
