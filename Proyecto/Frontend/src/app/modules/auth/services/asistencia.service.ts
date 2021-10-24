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

  prefijo_url = 'http://localhost:4000/';

   // Subir Asistencia
   subir_asistencia(carnet:string, nombre:string, evento:string, idevento:number, 
                  imgnombre:string, imgb64:string, extension:string){
    const url = this.prefijo_url;
    return this.http.post(url, {
      'carnet': carnet,
      'nombre': nombre,
      'nombreevento': evento,
      'idevento': idevento,
      'imgnombre': imgnombre,
      'imgb64': imgb64,
      'extension': extension
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }

  //Obtener asistencias
  read_asistencia(idevento:number){
    const url = this.prefijo_url;
    return this.http.get(url,
    ).pipe(map( data => data ));
  }
  
  //Obtener asistencias
  read_asistenciaCarnet(carnet:number){
    const url = this.prefijo_url;
    return this.http.get(url,
    ).pipe(map( data => data ));
  }
}
