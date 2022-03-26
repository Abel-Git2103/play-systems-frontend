import { Component, OnInit } from '@angular/core';
import { GroupService } from '../service/group.service';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.css']
})
export class GroupCreationComponent implements OnInit {

  groups: any = null;

  constructor(private groupService: GroupService) {}

  ngOnInit() {
    this.groupService
      .retornar()
      .subscribe((result) => (this.groups = result));
  }
}
