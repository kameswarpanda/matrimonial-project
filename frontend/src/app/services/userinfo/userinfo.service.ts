import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../../models/userinfo/userinfo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  // Method to save user info
  saveUserInfo(userInfo: UserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>(this.baseUrl, userInfo);
  }

  // Method to get user info by ID
  getUserInfoById(id: number): Observable<UserInfo> {
    return this.http.get<UserInfo>(`${this.baseUrl}/${id}`);
  }

  // Method to update user info
  updateUserInfo(id: number, userInfo: UserInfo): Observable<UserInfo> {
    return this.http.put<UserInfo>(`${this.baseUrl}/${id}`, userInfo);
  }

  // Method to delete user info
  deleteUserInfo(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  // Method to get all user info
  getAllUserInfo(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(this.baseUrl);
  }
}