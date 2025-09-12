import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = environment.apiUrl || 'http://localhost:4200';

  constructor(private http: HttpClient) {}

  // إذا عندك Backend حقيقي استخدمي السطر اللي بعده (uncomment)
  login(credentials: any): Observable<any> {
    // return this.http.post(`${this.apiUrl}/auth/login`, credentials);

    // Mock fallback (to test UI without backend)
    if (credentials.email === 'test@example.com' && credentials.password === '123456') {
      return of({ token: 'fake-jwt-token', user: { name: 'Test User', email: credentials.email } }).pipe(delay(700));
    }
    return throwError(() => ({ error: { message: 'Invalid email or password' } })).pipe(delay(500));
  }

  register(userData: any): Observable<any> {
    // return this.http.post(`${this.apiUrl}/auth/register`, userData);
    return of({ token: 'fake-jwt-token', user: { ...userData, id: 1 } }).pipe(delay(800));
  }
}
