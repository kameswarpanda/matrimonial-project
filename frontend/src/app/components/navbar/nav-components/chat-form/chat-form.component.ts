import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NavbarComponent } from '../../navbar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessagingService } from '../../../../services/message/message.service';
import { Message } from '../../../../models/messages/messages';
import { Registration } from '../../../../models/registration/registration';
import { RegistrationService } from '../../../../services/registration/registration.service';

@Component({
  selector: 'app-chat-form',
  standalone: true,
  imports: [RouterLink, NavbarComponent, ReactiveFormsModule],
  templateUrl: './chat-form.component.html',
  styleUrl: './chat-form.component.css'
})
export class ChatFormComponent implements OnInit{
  user!: any;
  userName!: any;
  loggedInUser!: any;
  interestForm!: FormGroup;
  registration!:any;

  constructor(
    private fb: FormBuilder,
    private messagingService: MessagingService,
    private registrationService: RegistrationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.user = history.state.user;
    this.loggedInUser = sessionStorage.getItem('loggedInUser');
    this.userName = this.user.personalInfo.registration.userName;

    console.log(this.userName);

    this.interestForm = this.fb.group({
      name: [this.loggedInUser, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
    });

    this.registration = this.loadRegistrationDetails()
  }

  onSubmit(): void {
    console.log(this.registration)
    if (this.interestForm.valid) {
        const message: Message = {
          ...this.interestForm.value,
          registration: this.registration
        };
      this.messagingService.saveMessage(message).subscribe(
        response => {
          console.log('Message saved successfully', response);
          // Navigate or give feedback to the user
          this.router.navigate(['matches/brides']);
        },
        error => {
          console.error('Error saving message', error);
        }
      );
    }
  }

  loadRegistrationDetails(): void {
    this.registrationService.findByUserName(this.userName).subscribe(
      (data: Registration) => {
        console.log(data);
        this.registration = data;
        this.registration = {
          rid: data.rid,
          userName: data.userName,
          password: data.password,
          email: data.email,
        };
      },
      (error) => {
        console.log('Error fetching registration details:', error);
      }
    );
  }


}
