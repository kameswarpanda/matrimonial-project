import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registration } from '../../models/registration/registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8080/api/registrations'; 

  private rid!:number;
  private userName!:string | null;

  private rData: any;
  constructor(private http: HttpClient) { }

  setrid(id:number){
    this.rid = id;
  }

  getrid(){
    return this.rid;
  }
  
  saveRegistration(registration: Registration): Observable<Registration> {
    return this.http.post<Registration>(this.baseUrl, registration);
  }

  getRegistrationById(id: number): Observable<Registration> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Registration>(url);
  }

  findByUserName(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/username/${username}`);
  }
}
