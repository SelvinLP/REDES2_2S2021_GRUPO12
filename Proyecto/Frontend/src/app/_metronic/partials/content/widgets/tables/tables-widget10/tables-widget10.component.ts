import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { reporteService } from 'src/app/modules/auth/services/reporte.service';


@Component({
  selector: 'app-tables-widget10',
  templateUrl: './tables-widget10.component.html',
})
export class TablesWidget10Component implements OnInit {
  constructor(private reporte_service: reporteService, private router: Router) {
    this.Bandera_seccionado = false;
    //this.obtener_reportes();
  }

  ngOnInit(): void {
    this.Bandera_seccionado = false;
    //this.obtener_reportes();
  }

  listadoreportes = [
    {
      Carnet: "201701133",
      Nombre: "Selvin",
      Proyecto: "Redes",
      Servidor: "2017000",
      Fecha: "5/11/2021",
      Cuerpo: "Hola mensaje"
    }
  ];

  //Formulario ver
 Datos_Seleccionados:any;
 Bandera_seccionado:boolean = false;
 CarneIngresado:string = "";

  verdatos(reporte:any){
    this.Bandera_seccionado = true;
    this.Datos_Seleccionados = reporte;
  }

  obtener_reportes(){
    
    if(this.CarneIngresado == ""){
      this.listadoreportes = this.reporte_service.listareportes;
    }else{
      this.listadoreportes = [];
      for(let item of this.reporte_service.listareportes){
        if(item.Carnet == this.CarneIngresado){
          this.listadoreportes.push(item);
        }
      }
      
    }
    /*
    if(this.CarneIngresado == ""){
      this.reporte_service.read_reportes().subscribe((res: any) => {
        res.message.forEach((element: any) => {
          this.listadoreportes.push(element);
        });
        
      });
    }else{
      this.reporte_service.read_carne(this.CarneIngresado).subscribe((res: any) => {
        res.message.forEach((element: any) => {
          this.listadoreportes.push(element);
        });
        //this.Bandera_seccionado = true;
        //this.Datos_Seleccionados = this.listadoreportes;
        //this.actualizarPagina();
      })
    }
    */
    
  }

  actualizarPagina(){
    const currentRoute = this.router.url;
        this.router.navigateByUrl('/dashboard', { skipLocationChange: true }).then(() => {
            this.router.navigate([currentRoute]); // navigate to same route
        });
  }

}
