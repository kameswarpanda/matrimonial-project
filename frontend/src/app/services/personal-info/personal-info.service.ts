import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personalinfo } from '../../models/personalinfo/personalinfo';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  private apiUrl = 'http://localhost:8080/api/personal-info';

  constructor(private http: HttpClient) { }

  savePersonalInfo(formData: FormData): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

  getPhoto(personalInfoId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${personalInfoId}/photo`, { responseType: 'blob' });
  }

  // Method to get all personal information
  getAllPersonalInfo(): Observable<Personalinfo[]> {
    return this.http.get<Personalinfo[]>(this.apiUrl);
  }

  updatePersonalInfo(id: number, formData: FormData): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, formData);
  }

}
