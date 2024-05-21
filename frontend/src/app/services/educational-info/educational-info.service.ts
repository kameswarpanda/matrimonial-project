import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registration } from '../../models/registration/registration';

@Injectable({
  providedIn: 'root'
})
export class EducationalInfoService {

  constructor() {}

  private baseUrl = 'http://localhost:8080/api/educational-info';

}
