import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

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
    //Espera un valor de entrada en el buscador, se actualiza cada 300ms despues de cada entrada
    this.search.valueChanges
      .pipe(debounceTime(300))
      .subscribe((value) => this.searchEmitter.emit(value));
  }
}
