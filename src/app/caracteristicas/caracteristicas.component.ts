import { Component, EventEmitter, Output } from '@angular/core';
import { __values } from 'tslib';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.css'],
})
export class CaracteristicasComponent {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  constructor(private miServicio: ServicioEmpleadosService) {}

  ngOnInit(): void {}

  agregarNuevasCaracteristocas(value:string){
    this.caracteristicasEmpleados.emit(value);
    this.miServicio.muestaMensaje('Cracteristica agregada correctamente');
  }
}
