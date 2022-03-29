import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChatService } from 'src/app/service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  id: any = null;
  chats: any = null;


  constructor(private chatService: ChatService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.chatService.getById(this.id)
    .subscribe(result=> this.chats = result);
    console.log(this.chats.id_chat);
  }

  lista() {

  }

}
