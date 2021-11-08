import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { reporteService } from 'src/app/modules/auth/services/reporte.service';

@Component({
  selector: 'app-lists-widget1',
  templateUrl: './lists-widget1.component.html',
})
export class ListsWidget1Component {
  constructor(private router: Router, private reporte_service: reporteService) {}

  public newReport = {
    Carnet: "",
    Nombre: "",
    Proyecto: "",
    Servidor: "..",
    Fecha: "5/11/2021",
    Cuerpo: ""
  }
  servidores = ["201700801", "201701133"];

  ngOnInit(): void {

  }

  guardarReporte(){
    let pos = Math.round(Math.random());
    this.reporte_service.listareportes.push({Carnet: this.newReport.Carnet,
    Nombre: this.newReport.Nombre,
    Proyecto: this.newReport.Proyecto,
    Servidor: this.servidores[pos],
    Fecha: this.newReport.Fecha,
    Cuerpo: this.newReport.Cuerpo
  });
  alert("Reporte ingresado Correctamente");
    /*
    this.reporte_service.subir_reporte(
      this.newReport.Carnet,
      this.newReport.Nombre,
      this.newReport.Proyecto,
      this.newReport.Cuerpo
    ).subscribe((res: any) => {
      if (res['success'] == true) {
        alert("Reporte ingresado Correctamente");
      }
    });
    */
  }

}
