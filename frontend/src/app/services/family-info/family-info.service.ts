import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FamilyInfo } from '../../models/family-info/family-info';

@Injectable({
  providedIn: 'root'
})
export class FamilyInfoService {
  private apiUrl = 'http://localhost:8080/api/family-info';

  constructor(private http: HttpClient) { }

  saveFamilyInfo(familyInfo: FamilyInfo): Observable<FamilyInfo> {
    return this.http.post<FamilyInfo>(this.apiUrl, familyInfo);
  }

  getFamilyInfoById(id: number): Observable<FamilyInfo> {
    return this.http.get<FamilyInfo>(`${this.apiUrl}/${id}`);
  }

  getAllFamilyInfo(): Observable<FamilyInfo[]> {
    return this.http.get<FamilyInfo[]>(this.apiUrl);
  }

  updateFamilyInfo(id: number, familyInfo: FamilyInfo): Observable<FamilyInfo> {
    return this.http.put<FamilyInfo>(`${this.apiUrl}/${id}`, familyInfo);
  }

  deleteFamilyInfo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
