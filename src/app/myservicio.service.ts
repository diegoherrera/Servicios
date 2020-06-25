import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyservicioService {
 
  data: any[] = [
    {
      Nombre: 'Diego',
      Apelido: 'Herrera',
      Edad: 18, 
      DNI: 27210151,
      Domicilio: 'Av idependencia 3066'
    }
  ]

  constructor() { }

  agregarUno() {
    this.data.push({
      Nombre: 'Diego2',
      Apelido: 'Herrera2',
      Edad: 18, 
      DNI: 27210151,
      Domicilio: 'Av idependencia 30662'
    });

  }
}
