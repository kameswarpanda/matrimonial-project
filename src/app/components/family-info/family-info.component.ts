import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-family-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './family-info.component.html',
  styleUrl: './family-info.component.css'
})
export class FamilyInfoComponent {

}
