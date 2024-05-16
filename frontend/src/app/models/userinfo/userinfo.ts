import { Registration } from "../registration/registration";


export interface UserInfo {
    registration: Registration;
    firstName: string;
    lastName: string;
    age: number;
}
