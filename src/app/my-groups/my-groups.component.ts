import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css']
})
export class MyGroupsComponent implements OnInit {

  @Output() id_grupo: any;
  @Input() my_groups: any = null;
  @Input() chat: any = null;
  id: any = null;

  constructor(private groupService: GroupService, private _route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.groupService.retornar()
      .subscribe(result=> this.my_groups = result)
  }

  get_group_chat(id: any) {
    console.log(id);
  }

}
