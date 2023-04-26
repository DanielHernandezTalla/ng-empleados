import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  muestaMensaje(mensaje:string){
    alert(mensaje);
  }
}
