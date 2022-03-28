import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/service/group.service';
import { JuegoService } from 'src/app/service/juego.service';

@Component({
  selector: 'app-game-explorer',
  templateUrl: './game-explorer.component.html',
  styleUrls: ['./game-explorer.component.css'],
})
export class GameExplorerComponent implements OnInit {
  juegos: any = null;
  @Output() juego_seleccionado: any;
  grupo: Group = {};

  submitted = false;

  constructor(
    private groupService: GroupService,
    private router: Router,
    private juegoService: JuegoService
  ) {}

  ngOnInit(): void {
    this.juegoService.retornar().subscribe((result) => (this.juegos = result));
  }

  listar_juego_seleccionado() {
    console.log(this.juego_seleccionado);
  }
}
