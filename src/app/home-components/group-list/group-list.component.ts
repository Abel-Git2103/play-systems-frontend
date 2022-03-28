import { Component, Input, OnInit } from '@angular/core';
import { GroupService } from 'src/app/service/group.service';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css'],
})
export class GroupListComponent implements OnInit {
  // Raul
  @Input() available_groups: any = null;
  juego_seleccionado: any;
  // Edgar
  filtro_valor = '';

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    // Raul
    this.groupService
      .retornar()
      .subscribe((result) => (this.available_groups = result));
  }
  handleSearch(value: string) {
    console.log(value);
    this.filtro_valor = value;
  }
}
