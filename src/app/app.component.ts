import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    private nombre:string = "Frandioniz";
    private nombre2:string = "frANciscO javier rodRIguez dioniz";
    private array:number[] = [1,2,3,4,5,6,7,8,9,10];
    private PI:number = Math.PI;
    private percent:number = 0.234;
    private salario:number = 1234.5;
    private heroe = {
      nombre: "Logan",
      clave: "Wolverine",
      edad: 500,
      direccion: {
        calle: "Primera",
        casa: "19"
      }
    };
    private valorDePromesa = new Promise( (resolve, reject)=>{
      setTimeout( ()=>resolve('Llegaron los datos!'), 3500);
    })

    private fecha:Date = new Date();
    private video:string = "87gWaABqGYs";

    private password:string = "contraseña";
    private activar:boolean = true;
}
