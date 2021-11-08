import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciaService } from 'src/app/modules/auth/services/asistencia.service';

@Component({
  selector: 'app-lists-widget3',
  templateUrl: './lists-widget3.component.html',
})
export class ListsWidget3Component {
  constructor(private router: Router, private asistencia_service: AsistenciaService) {}

  ngOnInit(): void {
    //this.obtener_reportes();
  }

  listadoasistencia = [
    {
      carnet: "201701133",
      nombre: "Selvin",
      evento: "Redes",
      idenvento: "2017000",
      fecha: "17/09/2021",
      imagen: "https://img.discogs.com/Urqa1qKPD-K0R7f12YwD0zgo5RE=/600x516/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-2608601-1459131069-5533.png.jpg",
      servidor: "servidorbase"
    }
  ];
  EventoIngresado:string = "";

  obtener_reportes(){
    //console.log(this.asistencia_service.listadoasistencia);
    if(this.EventoIngresado == ""){
      this.listadoasistencia = this.asistencia_service.listadoasistencia;
    }else{
      this.listadoasistencia = [];
      for(let item of this.asistencia_service.listadoasistencia){
        if(item.idenvento == this.EventoIngresado){
          this.listadoasistencia.push(item);
        }
      }
    }
    /*
    this.asistencia_service.read_asistencia(this.EventoIngresado).subscribe((res: any) => {
      res.message.forEach((element: any) => {
        this.listadoasistencia.push(element);
      });
    });
    */
  }
}
