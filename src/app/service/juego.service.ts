import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {
  constructor(private http: HttpClient) {}

  retornar() {
    return this.http.get("https://play-systems.herokuapp.com/api/juegos");
  }

  getById(id: string) {
    return this.http.get(`https://play-systems.herokuapp.com/api/juegos/${id}`);
  }

  add(data: any) {
    return this.http.post(`https://play-systems.herokuapp.com/api/juegos`, data);
  }

  delete(id: any) {
    return this.http.delete(`${`https://play-systems.herokuapp.com/api/juegos`}/${id}`);
  }

  update(id: any, data: any) {
    return this.http.put(`${`https://play-systems.herokuapp.com/api/juegos`}/${id}`, data);
  }
}
