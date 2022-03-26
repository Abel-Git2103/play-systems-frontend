import { Component, Input, OnInit } from '@angular/core';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  @Input() available_groups: any = null;

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groupService.retornar()
      .subscribe(result=> this.available_groups = result)
  }

}
