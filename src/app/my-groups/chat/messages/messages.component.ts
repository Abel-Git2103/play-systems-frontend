import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/service/auth/user.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  @Input() mensajes: any = null;
  @Input() chat: any = null;

  contenido: string = "";
  usuarios: any = null;

  currentDateTime: any;
  usuario: any;
  submitted = false;

  constructor(private messageService: MessageService, private userService: UserService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.userService.retornar()
      .subscribe((response) => (this.usuarios = response));
  }

  sendMessage(): void {
    this.getUsuario();
    this.getContenido();

    console.log(this.contenido);

    const data = {
      chat: this.chat,
      usuario: this.usuario,
      contenido: this.contenido,
    };

    this.messageService.add(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUsuario(): void {
    for (let index = 0; index < this.usuarios.length; index++) {
      if (this.usuarios[index].username == window.sessionStorage.getItem('auth-username')) {
        this.usuario = this.usuarios[index];

      }

    }
    console.log(this.usuario);
  }

  getContenido(): void {
    this.contenido = (document.getElementById("contenido") as HTMLInputElement).value;
  }

}
