import { Component, Input, OnInit, Output } from '@angular/core';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  @Output() id_grupo: any;
  @Input() my_groups: any = null;

  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    this.groupService.retornar()
      .subscribe(result=> this.my_groups = result)
  }

  get_group_chat(id: any) {
    console.log(id);
  }

}
