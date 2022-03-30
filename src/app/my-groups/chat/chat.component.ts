import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/service/chat.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit, OnDestroy {
  id: any = null;
  mensajes: any = null;

  suscription = new Subscription();

  constructor(
    private messageService: MessageService,
    private _route: ActivatedRoute,
    private router: Router
  ) { }
  //Implementamos el Ondestroy para liberar memoria
  ngOnDestroy(): void {
    console.log('Observable cerrado');
    this.suscription.unsubscribe();
  }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);
    setInterval(() => {
      this.messageService.getMessagesByChatId(this.id).subscribe(
        (response) => {
          console.log(response);
          this.mensajes = response;
        },
        (error) => {
          console.log(error);
        }
      );
    }, 2000);


    //Cada vez que se añadan mensajes se hara un next i ejecutara este codigo
    this.suscription = this.messageService.refresh$.subscribe(() => {
      this.messageService.getMessagesByChatId(this.id).subscribe(
        (response) => {
          console.log(response);
          this.mensajes = response;
        },
        (error) => {
          console.log(error);
        }
      );
    });

  }



}
