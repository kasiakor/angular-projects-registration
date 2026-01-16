import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly STUDENT_ID_KEY = 'studentId';

  /** Returns true if userId exists in localStorage */
  isLoggedIn(): boolean {
    return localStorage.getItem(this.STUDENT_ID_KEY) !== null;
  }

  /** Optional helpers */
  getUserId(): string | null {
    return localStorage.getItem(this.STUDENT_ID_KEY);
  }

  clearUserId(): void {
    localStorage.removeItem(this.STUDENT_ID_KEY);
  }
}
