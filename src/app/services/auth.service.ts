import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private baseUrl = 'http://localhost:8080/api/registrations'; // Replace with your backend API base URL
  
    constructor(private http: HttpClient) { }
  
    registerUser(formData: any): Observable<any> {
      return this.http.post<any>(`${this.baseUrl}/api/registration`, formData);
    }
  }



