import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciaService } from 'src/app/modules/auth/services/asistencia.service';

@Component({
  selector: 'app-lists-widget2',
  templateUrl: './lists-widget2.component.html',
})
export class ListsWidget2Component {
  constructor(private router: Router, private asistencia_service: AsistenciaService) {}

  public newReport = {
    Carnet: "",
    Nombre: "",
    Proyecto: "",
    Servidor: "..",
    Fecha: Date.now(),
    Cuerpo: ""
  }

  guardarReporte(){
    
  }
}
