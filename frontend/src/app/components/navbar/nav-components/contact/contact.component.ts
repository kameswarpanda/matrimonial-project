import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavbarComponent } from '../../navbar.component';
import Swal from 'sweetalert2';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ContactService } from '../../../../services/contact-info/contact.service';
import { Contact } from '../../../../models/contact-info/contact';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NavbarComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent{

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const contact: Contact = this.contactForm.value;
      this.contactService.saveContact(contact).subscribe(
        response => {
          Swal.fire({
            icon: 'success',
            title: 'We received your query. We will reply as soon as possible.',
            toast: true,
            position: 'center-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          this.contactForm.reset();
        },
        error => {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: error.message,
          });
        }
      );
    }
  }

  // onClick(){
  //   //sweetalert
  //   const Toast = Swal.mixin({
  //     toast: true,
  //     position: 'center-end',
  //     showConfirmButton: false,
  //     timer: 3000,
  //     timerProgressBar: true,
  //     didOpen: (toast) => {
  //       toast.onmouseenter = Swal.stopTimer;
  //       toast.onmouseleave = Swal.resumeTimer;
  //     },
  //   });
  //   Toast.fire({
  //     icon: 'success',
  //     title: 'We recived your Query, We will reply as soon as possbile.',
  //   });

  // }

}
