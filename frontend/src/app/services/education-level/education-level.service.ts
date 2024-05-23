import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationCareer } from '../../models/education-career/education-career';

@Injectable({
  providedIn: 'root'
})
export class EducationCareerService {

  private apiUrl = 'http://localhost:8080/api/education-info';

  constructor(private http: HttpClient) { }

  saveEducationInfo(educationInfo: any): Observable<any> {
    return this.http.post<EducationCareer>(this.apiUrl, educationInfo);
  }

  getEducationInfoById(id: number): Observable<any> {
    return this.http.get<EducationCareer>(`${this.apiUrl}/${id}`);
  }

  getAllEducationInfo(): Observable<EducationCareer[]> {
    return this.http.get<EducationCareer[]>('http://localhost:8080/api/education-info/all');
  }

  updateEducationInfo(id: number, educationInfo: any): Observable<any> {
    return this.http.put<EducationCareer>(`${this.apiUrl}/${id}`, educationInfo);
  }

  deleteEducationInfo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
