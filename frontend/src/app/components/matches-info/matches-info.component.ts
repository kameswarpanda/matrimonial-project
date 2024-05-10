import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-matches-info',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './matches-info.component.html',
  styleUrl: './matches-info.component.css'
})
export class MatchesInfoComponent {

}
