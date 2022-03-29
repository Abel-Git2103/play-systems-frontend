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
  chat: any = null;

  constructor(private chatService: ChatService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.chatService.getById(this.id)
    .subscribe(
      (response) => {
        console.log(response);
        this.chat = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
