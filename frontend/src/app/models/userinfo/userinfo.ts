import { Registration } from "../registration/registration";


export interface UserInfo {
    id?: number;
    registration: Registration;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
}
