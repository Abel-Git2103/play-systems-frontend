import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Group } from 'src/app/models/group.model';
import { GroupService } from 'src/app/service/group.service';
import { JuegoService } from 'src/app/service/juego.service';

@Component({
  selector: 'app-game-explorer',
  templateUrl: './game-explorer.component.html',
  styleUrls: ['./game-explorer.component.css'],
})
export class GameExplorerComponent implements OnInit {
  search = new FormControl('');
  @Output('search') searchEmitter = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => this.searchEmitter.emit(value));
  }
}
