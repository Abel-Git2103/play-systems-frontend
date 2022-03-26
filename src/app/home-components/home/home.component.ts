import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  groups: any = null;

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.groupService
      .retornar()
      .subscribe((result) => (this.groups = result));
  }
}
