import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  getMessagesByChatId(id_chat: any) {
    return this.http.get(`https://play-systems.herokuapp.com/api/mensajes/chat/${id_chat}`);
  }

  add(data: any) {
    return this.http.post(
      `https://play-systems.herokuapp.com/api/mensajes`,
      data
    );
  }

}
