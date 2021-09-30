import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-widget10',
  templateUrl: './tables-widget10.component.html',
})
export class TablesWidget10Component implements OnInit {
  constructor() {
    this.Bandera_seccionado = false;
  }

  ngOnInit(): void {
    this.Bandera_seccionado = false;
  }

  listadoreportes = [
    {
      Carnet: "201701133",
      Nombre: "Selvin",
      Proyecto: "Redes",
      Servidor: "2017000",
      Fecha: "17/09/2021",
      Cuerpo: "Hola mensaje"
    }
  ];

  //Formulario ver
 Datos_Seleccionados:any;
 Bandera_seccionado:boolean = false;

  verdatos(reporte:any){
    this.Bandera_seccionado = true;
    this.Datos_Seleccionados = reporte;
  }

}
