import { Registration } from "../registration/registration";

export class Message {
    id?: number;
    name!: string;
    email!: string;
    location!: string;
    date!: string;
    time!: string;
    registration!: Registration;
  }
  