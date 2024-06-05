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

  
  updateRegistration(registration: Registration): Observable<Registration> {
    const url = `${this.baseUrl}/${registration.rid}`;
    return this.http.put<Registration>(url, registration);
  }

  getRegistrationById(id: number): Observable<Registration> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Registration>(url);
  }

  findByUserName(username: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/username/${username}`);
  }
  findByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/email/${email}`);
  }

  getAllRegistrations(): Observable<Registration[]> {
    return this.http.get<Registration[]>(this.baseUrl);
  }

  //for delete users
  deleteUser(rid: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${rid}`)
  }
  getRegistrationByUsername(username: string): Observable<Registration> {
    const url = `${this.baseUrl}/username/${username}`;
    return this.http.get<Registration>(url);
  }
}
