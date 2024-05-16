import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EducationCareer } from '../../models/education-career';

@Injectable({
  providedIn: 'root'
})
export class EducationCareerService {

  constructor(private http: HttpClient) { }

  addEducationCareer(educationCareer: EducationCareer): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/education-career', educationCareer);
  }
}
