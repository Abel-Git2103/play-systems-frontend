import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
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

  contenido: any;
  usuarios: any = null;

  message: Message = {};

  usuario: any;
  submitted = false;

  constructor(private messageService: MessageService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.retornar()
      .subscribe((response) => (this.usuarios = response));
  }

  sendMessage(): void {

    this.getUsuario();

    const data = {
      chat: this.chat,
      usuario: this.usuario,
      contenido: this.message.contenido
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

}
