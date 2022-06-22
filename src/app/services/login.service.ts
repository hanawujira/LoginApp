import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel, LoginResponse } from '../models/login.model';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  static getToken() {
    return JSON.parse(localStorage.getItem('authToken')!);
  }

  static setToken(token: string) {
    localStorage.setItem('authToken', JSON.stringify(token));
  }

  static removeToken(){
    localStorage.removeItem('authToken');
  }

  login(user: LoginModel): Observable<LoginResponse> {
    const url = 'https://selfcare-service.test.melita.com/interview/backend/api/login';
    return this.http.post<LoginResponse>(url, user);
  }

  logout(): Observable<any> {
    const url = 'https://selfcare-service.test.melita.com/interview/backend/api/logout';
    return this.http.get<any>(url);
  }
}
