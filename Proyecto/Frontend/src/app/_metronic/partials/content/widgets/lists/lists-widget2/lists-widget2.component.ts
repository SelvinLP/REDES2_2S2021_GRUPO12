import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AsistenciaService } from 'src/app/modules/auth/services/asistencia.service';

@Component({
  selector: 'app-lists-widget2',
  templateUrl: './lists-widget2.component.html',
})
export class ListsWidget2Component {
  constructor(private router: Router, private asistencia_service: AsistenciaService) {}

  public newAsistencia = {
    carnet: "",
    nombre: "",
    nombreevento: "",
    idevento: "",
    imgnombre: "",
    imgb64: "",
    extension: ""
  }

  guardarReporte(){
    this.asistencia_service.subir_asistencia(
      this.newAsistencia
    ).subscribe((res: any) => {
      alert("Asistencia subida correctamente!!");
    });
  }

  subirarchivo(event:any) {
    if(event.target.files) {
      let archivocargado = event.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(archivocargado);
      this.newAsistencia.extension = archivocargado.name.toString();
      this.newAsistencia.extension = this.newAsistencia.extension.slice((this.newAsistencia.extension.lastIndexOf(".") - 1 >>> 0) + 2);

      this.newAsistencia.imgnombre = archivocargado.name?.toString();
      this.newAsistencia.imgnombre  = this.newAsistencia.imgnombre .replace(/\.[^/.]+$/, '');

      reader.onload = ( event2:any ) => {
        this.newAsistencia.imgb64 = reader.result?.toString() != undefined ? reader.result?.toString() : "";
        this.newAsistencia.imgb64 = this.newAsistencia.imgb64.replace(/data:.+?,/,"");
        }
    }else{
      alert("Error al cargar el archivo");
    }
  }

}
