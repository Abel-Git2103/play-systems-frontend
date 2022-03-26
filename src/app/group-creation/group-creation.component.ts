import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../models/group.model';
import { Juego } from '../models/juego.model';
import { GroupService } from '../service/group.service';
import { JuegoService } from '../service/juego.service';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.css'],
})
export class GroupCreationComponent implements OnInit {

  juego: Juego = {};
  juegos: any = null;
  grupo: Group = {};

  submitted = false;

  constructor(private groupService: GroupService, private router: Router, private juegoService: JuegoService) {}

  ngOnInit(): void {
    this.juegoService
    .retornar()
    .subscribe((result) => (this.juegos = result));
  }

  saveGroup(): void {
    const data = {
      nombre_grupo: this.grupo.nombre_grupo,
      descripcion: this.grupo.descripcion,
      juego: this.grupo.juego,
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
}
