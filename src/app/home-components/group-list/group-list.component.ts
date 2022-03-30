import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/service/group.service';
import { SeuneService } from 'src/app/service/seune.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css'],
})
export class GroupListComponent implements OnInit {
  @Input() available_groups: any = null;
  juego_seleccionado: any;
  filtro_valor = '';
  seune: any = null;
  username: any;
  constructor(
    private groupService: GroupService,
    private seUneService: SeuneService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.groupService
      .retornar()
      .subscribe((result) => (this.available_groups = result));

    this.username  = window.sessionStorage.getItem('auth-username');
  }

  handleSearch(value: any) {
    console.log(value);
    this.filtro_valor = value;
  }
/*   unirseGrupo(): void {
  const data = {
    grupo: 3,
    usuario: this.username,
  };

  this.seUneService.add(data).subscribe(
    (response) => {
      console.log(response);
      this.seune = response;
      this.router.navigate(['/chat', 3]);
    },
    (error) => {
      console.log(error);
    }
  );
}*/

}
