import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from 'src/app/service/chat.service';
import { MessageService } from 'src/app/service/message.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  id: any = null;
  mensajes: any = null;

  constructor(private messageService: MessageService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.messageService.getMessagesByChatId(this.id)
    .subscribe(
      (response) => {
        console.log(response);
        this.mensajes = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
