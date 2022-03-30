import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeuneService {
  constructor(private http: HttpClient) {}

  getSeUneByUsername(Username: any) {
    return this.http.get(
      `https://play-systems.herokuapp.com/api/seune/grupo/${Username}`
    );
  }

  add(data: any) {
    return this.http.post(`https://play-systems.herokuapp.com/api/seune`, data);
  }
}
