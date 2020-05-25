import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = 'http://localhost:9999/api/users';

  constructor(private http: HttpClient) {}

  register(payload) {
    return this.http.post<any>(this.baseUrl, payload);
  }

  login(payload) {
    return this.http.post<any>(this.baseUrl, payload);
  }

  logout(payload) {
    return this.http.post<any>(this.baseUrl, payload);
  }

  getById(payload) {
    return this.http.get<any>(`${this.baseUrl}/${payload}`);
  }

  getAll() {
    return this.http.get<any>(this.baseUrl);
  }
}
