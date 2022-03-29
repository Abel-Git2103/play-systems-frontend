import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../models/group.model';
import { GroupService } from '../service/group.service';
import { JuegoService } from '../service/juego.service';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.css'],
})
export class GroupCreationComponent implements OnInit {

  juegos: any = null;
  juego_seleccionado: any;
  posicion_juego_array: any;
  grupo: Group = {};

  submitted = false;

  constructor(private groupService: GroupService, private router: Router, private juegoService: JuegoService) {}

  ngOnInit(): void {
    this.juegoService
    .retornar()
    .subscribe((result) => (this.juegos = result));
  }

  saveGroup(): void {
    console.log(this.juego_seleccionado);

    this.seleccionJuego();
    JSON.stringify(this.posicion_juego_array)

    const data = {
      nombre_grupo: this.grupo.nombre_grupo,
      descripcion: this.grupo.descripcion,
      juego: this.juegos[this.posicion_juego_array]
    };

    this.groupService.add(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        this.router.navigate(['/chat']);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  seleccionJuego(): void {
    for (let index = 0; index < this.juegos.length; index++) {
      if (this.juego_seleccionado == this.juegos[index].id_juego) {
        this.posicion_juego_array = index;
      }

    }
  }
}
