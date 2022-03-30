import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from 'src/app/service/group.service';
import { SeuneService } from '../service/seune.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.css'],
})
export class MyGroupsComponent implements OnInit {
  @Output() id_grupo: any;
  @Input() my_groups: any = null;
  @Input() chat: any = null;
  id: any = null;
  usuario: any = window.sessionStorage.getItem('auth-username');
  seune: any = null;

  constructor(
    private groupService: GroupService,
    private _route: ActivatedRoute,
    private router: Router,
    private seUneService: SeuneService
  ) {}

  ngOnInit(): void {
    this.groupService
      .retornar()
      .subscribe((result) => (this.my_groups = result));

    this.seUneService.getSeUneByUsername(this.usuario).subscribe(
      (response) => {
        console.log(response);
        this.seune = response;

      },
      (error) => {
        console.log(error);
      }
    );
  }

  get_group_chat(id: any) {
    console.log(id);
  }
}
