import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth/login';
  private registerUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(this.apiUrl, body);
  }

  register(email: string, username: string, password: string): Observable<any> {
    const body = { email, username, password };
    return this.http.post(this.registerUrl, body);
  }
}
