import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent {
  @Input() empleado: Empleado;
  @Input() indice: number;

  arrayCaracteristicas = [''];

  agregarCaracteristica(nuevaCaracteristica:string){
    this.arrayCaracteristicas.push(nuevaCaracteristica);
    // console.log(this.arrayCaracteristicas);
  }

}
