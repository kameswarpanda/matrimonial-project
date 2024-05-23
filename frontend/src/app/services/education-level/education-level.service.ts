import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationCareer } from '../../models/education-career';

@Injectable({
  providedIn: 'root'
})
export class EducationCareerService {

  private apiUrl = 'http://localhost:8080/api/education-info';

  constructor(private http: HttpClient) { }

  saveEducationInfo(educationInfo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, educationInfo);
  }

  getEducationInfoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getAllEducationInfo(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updateEducationInfo(id: number, educationInfo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, educationInfo);
  }

  deleteEducationInfo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
