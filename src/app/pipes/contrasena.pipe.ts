import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true ): string {
    let cont:number = value.length;
    let contrasena:string = value;

    if (activar) {
      contrasena = "";
      for (let i = 0; i < cont; i++) {
        contrasena += "*";
      }
    }

    return contrasena;
  }

}
