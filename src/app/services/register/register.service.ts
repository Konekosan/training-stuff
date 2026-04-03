import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  register(payload: RegisterRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register`, payload);
  }

}
