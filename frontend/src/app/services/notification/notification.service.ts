import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private isNotificationBoxVisible = new BehaviorSubject<boolean>(false);
  isNotificationBoxVisible$ = this.isNotificationBoxVisible.asObservable();

  toggleNotificationBox() {
    this.isNotificationBoxVisible.next(!this.isNotificationBoxVisible.value);
  }

  hideNotificationBox() {
    this.isNotificationBoxVisible.next(false);
  }
}
