import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar',
})
export class BuscarPipe implements PipeTransform {
  transform(lista: any[], texto: string): any[] {
    if (!texto) return lista;

    return lista.filter((group) =>
      group.nombre_grupo.toUpperCase().includes(texto.toUpperCase())
    );
  }
}
