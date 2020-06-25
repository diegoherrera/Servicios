import { Component, OnInit } from '@angular/core';
import { MyservicioService } from '../myservicio.service';
import { MyservicioncomponentService } from '../myservicioncomponent.service';
import { MyserviciongmoduleService } from '../myserviciongmodule.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css'],
  providers: [MyservicioncomponentService]
})
export class Componente2Component implements OnInit {

  clientes1: any = [];

  constructor(private myserviciongmoduleService: MyserviciongmoduleService, private myservicioService: MyservicioService) { }

  ngOnInit(): void {
    this.clientes1 = this.myservicioService.data;
    console.log(this.myserviciongmoduleService.datoenservicio);
  }
  eventoSobreServicio() {
    this.myservicioService.agregarUno();
  }

}
