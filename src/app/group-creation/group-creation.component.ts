import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../models/group.model';
import { GroupService } from '../service/group.service';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.css'],
})
export class GroupCreationComponent implements OnInit {
  grupo: Group = {};

  submitted = false;

  constructor(private groupService: GroupService, private router: Router) {}

  ngOnInit(): void {}

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
