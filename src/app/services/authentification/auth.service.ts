import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginRequest, TokenResponse, MeResponse } from '../../models/auth/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8000';
  private readonly tokenKey = '';

  private currentUserSubject = new BehaviorSubject<MeResponse | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  login(payload: LoginRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}/auth/login`, payload).pipe(
      tap((response) => {
        localStorage.setItem(this.tokenKey, response.access_token);
      })
    );
  }

  loadMe(): Observable<MeResponse> {
    return this.http.get<MeResponse>(`${this.apiUrl}/auth/me`).pipe(
      tap((user) => this.currentUserSubject.next(user))
    );
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getCurrentUserSnapshot(): MeResponse | null {
    return this.currentUserSubject.value;
  }

}
