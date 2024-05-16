import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {

  constructor(private http: HttpClient) { }

  submitPersonalInfo(photo: File, bloodGroup: string): Observable<any> {
    const reader = new FileReader();

    return new Observable((observer) => {
      reader.onload = (event) => {
        const byteArray = new Uint8Array((event.target as FileReader).result as ArrayBuffer);
        const payload = {
          photo: Array.from(byteArray),
          bloodGroup: bloodGroup
        };
        this.http.post('http://localhost:8080/api/personal-info', payload)
          .subscribe(
            (response) => {
              observer.next(response);
              observer.complete();
            },
            (error) => {
              observer.error(error);
            }
          );
      };
      reader.onerror = (error) => {
        observer.error(error);
      };
      reader.readAsArrayBuffer(photo);
    });
  }
}
