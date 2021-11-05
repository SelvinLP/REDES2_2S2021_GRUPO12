import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciaService } from 'src/app/modules/auth/services/asistencia.service';

@Component({
  selector: 'app-lists-widget4',
  templateUrl: './lists-widget4.component.html',
})
export class ListsWidget4Component {
  constructor(private router: Router, private asistencia_service: AsistenciaService) {}

  ngOnInit(): void {
    //this.obtener_reportes();
  }

  listadoasistencia = [
    {
      carnet: "201701133",
      nombre: "Selvin2",
      evento: "Redes1",
      idenvento: "2017000",
      fecha: "17/09/2021",
      imagen: "https://img.discogs.com/Urqa1qKPD-K0R7f12YwD0zgo5RE=/600x516/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-2608601-1459131069-5533.png.jpg",
      servidor: "servidorbase"
    }
  ];
  CarnetIngresado:string = "";

  obtener_reportes(){
    this.listadoasistencia = [];
    if(this.CarnetIngresado == ""){
      this.listadoasistencia = this.asistencia_service.listadoasistencia;
    }else{
      this.listadoasistencia = [];
      for(let item of this.asistencia_service.listadoasistencia){
        if(item.carnet == this.CarnetIngresado){
          this.listadoasistencia.push(item);
        }
      }
    }
    /*
    this.asistencia_service.read_asistenciaCarnet(this.CarnetIngresado).subscribe((res: any) => {
      res.message.forEach((element: any) => {
        this.listadoasistencia.push(element);
      });
    });
    */
  }

}
