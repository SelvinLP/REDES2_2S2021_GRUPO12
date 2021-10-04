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
    Fecha: Date.now(),
    Cuerpo: ""
  }


  ngOnInit(): void {

  }

  guardarReporte(){
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
  }

}
