import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FamilyInfo } from '../../models/family-info/family-info';


@Injectable({
  providedIn: 'root'
})
export class FamilyInfoService {

  constructor(private http: HttpClient) { }

  addFamilyInfo(familyInfo: FamilyInfo): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/family-info', familyInfo);
  }
}
