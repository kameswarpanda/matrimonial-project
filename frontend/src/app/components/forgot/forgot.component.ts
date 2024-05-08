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
      .sendForm('service_hksa34h', 'template_4x9byr7', e.target as HTMLFormElement , {
        publicKey: 'yoF2P1NACJyTjTxOS',
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
