import { Component } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-lists-widget1',
  templateUrl: './lists-widget1.component.html',
})
export class ListsWidget1Component {
  constructor(private router: Router) {}

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
    console.log(this.newReport)
  }

}
