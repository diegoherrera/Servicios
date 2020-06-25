import { Component, OnInit } from '@angular/core';
import { MyservicioService } from '../myservicio.service';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  clientes1: any = [];

  constructor(private myservicioService: MyservicioService) { }

  ngOnInit(): void {
    this.clientes1 = this.myservicioService.data;
  }
  eventoSobreServicio() {
    this.myservicioService.agregarUno();
  }
}
