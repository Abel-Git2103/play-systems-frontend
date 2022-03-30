import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  //Guardara valor de los datos que vayamos añadiendo
  private _refresh$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  //Obtendra el valor de los datos añadidos
  get refresh$() {
    return this._refresh$;
  }

  getMessagesByChatId(id_chat: any) {
    return this.http.get(
      `https://play-systems.herokuapp.com/api/mensajes/chat/${id_chat}`
    );
  }

  getById(id: any) {
    return this.http.get(`https://play-systems.herokuapp.com/api/mensajes/${id}`);
  }

  add(data: any) {
    return this.http
      .post(`https://play-systems.herokuapp.com/api/mensajes`, data)
      .pipe(
        //cada vez que se ejecute guardara los datos que lanza
        tap(() => {
          this._refresh$.next();
        })
      );
  }

  delete(id: any) {
    return this.http.delete(`${`https://play-systems.herokuapp.com/api/mensajes`}/${id}`);
  }
}
