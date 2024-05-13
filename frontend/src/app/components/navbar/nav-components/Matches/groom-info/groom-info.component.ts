import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-groom-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ],
  templateUrl: './groom-info.component.html',
  styleUrl: './groom-info.component.css'
})
export class GroomInfoComponent {

}
