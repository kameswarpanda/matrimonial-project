import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../navbar.component';


@Component({
  selector: 'app-groom',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './groom.component.html',
  styleUrl: './groom.component.css'
})
export class GroomComponent {

}
