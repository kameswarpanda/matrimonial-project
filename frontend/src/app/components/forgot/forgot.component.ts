import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-forgot',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './forgot.component.html',
  styleUrl: './forgot.component.css'
})
export class ForgotComponent {
  public onSubmit(e: Event) {
    e.preventDefault();
    console.log("submit");
    emailjs
      .sendForm('service_b33wh5w', 'template_fqinkyz', e.target as HTMLFormElement , {
        publicKey: 'TiPMp9coe69l6TC0y',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.reload();
        },
        (error) => {
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}
