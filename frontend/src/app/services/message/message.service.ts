import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../../models/messages/messages';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {
  private baseUrl = 'http://localhost:8080/api/messages'; 

  constructor(private http: HttpClient) { }

  saveMessage(Message: Message): Observable<Message> {
    return this.http.post<Message>(this.baseUrl, Message);
  }

  getMessageById(id: number): Observable<Message> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Message>(url);
  }

  getAllMessages(): Observable<Message[]> {
    return this.http.get<Message[]>('http://localhost:8080/api/messages/all');
  }

  updateMessage(id: number, Message: Message): Observable<Message> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Message>(url, Message);
  }

  deleteMessage(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
