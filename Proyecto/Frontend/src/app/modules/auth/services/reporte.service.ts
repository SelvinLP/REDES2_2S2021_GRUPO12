import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { map, catchError, switchMap, finalize } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { AuthModel } from '../models/auth.model';
import { AuthHTTPService } from './auth-http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export type UserType = UserModel | undefined;

@Injectable({
    providedIn: 'root'
})

export class reporteService {
    constructor(private http:HttpClient, public router: Router){}

    headers:HttpHeaders = new HttpHeaders({
        'Content-Type':'application/json'
      });

    prefijo_url = 'http://localhost:4000/';

    // Subir Reporte
  subir_reporte(carnet:string, nombre:string, proyecto:string, cuerpo:string){
    const url = this.prefijo_url;
    return this.http.post(url, {
      'carnet': carnet,
      'nombre': nombre,
      'proyecto': proyecto,
      'cuerpo': cuerpo
    }, {headers: this.headers}
    ).pipe(map( data => data ));
  }

  //Obtener todos los reportes
   read_reportes(){
    const url = this.prefijo_url;
    return this.http.get(url,
    ).pipe(map( data => data ));
  }

  //Buscar por carnet
  read_carne(carne:string){
    const url = this.prefijo_url + carne;
    return this.http.get(url,
    ).pipe(map( data => data ));
  }
}
