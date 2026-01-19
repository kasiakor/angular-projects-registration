import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  onUserLogin(obj: any) {
    console.log('Login request payload:', obj);
    return this.http.post(
      'https://api.freeprojectapi.com/api/ProjectCompetition/login',
      obj
    );
  }
}
