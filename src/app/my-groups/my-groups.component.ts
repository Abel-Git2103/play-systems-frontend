import { Component, Input, OnInit } from '@angular/core';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  @Input() my_groups: any = null;

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groupService.retornar()
      .subscribe(result=> this.my_groups = result)
  }

}
