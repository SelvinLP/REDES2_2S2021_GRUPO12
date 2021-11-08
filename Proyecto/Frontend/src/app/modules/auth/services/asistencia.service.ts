import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {

  constructor(private http:HttpClient, public router: Router) { }

  headers:HttpHeaders = new HttpHeaders({
    'Content-Type':'application/json'
  });

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

  prefijo_url = 'http://redes2g12.tk:4000/';

   // Subir Asistencia
   subir_asistencia(data:any){
    const url = this.prefijo_url + "addasistencia";
    console.log(data);
    return this.http.post(url, data, {headers: this.headers}
    ).pipe(map( data => data ));
  }

  //Obtener asistencias
  read_asistencia(idevento:number){
    const url = this.prefijo_url + "asistencia";
    return this.http.post(url, {
      'idevento': idevento
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }
  
  //Obtener asistencias
  read_asistenciaCarnet(carnet:number){
    const url = this.prefijo_url + "asistenciaest";
    return this.http.post(url,{
      'carnet': carnet
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }
}
