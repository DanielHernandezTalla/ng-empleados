import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable()
export class EmpleadosService {
  empleados: Empleado[] = [
    new Empleado('Missa', 'Algo', 'Presidente', 230),
    new Empleado('Mark', 'Hernandez', 'Ingeniero', 540),
    new Empleado('Daniel', 'Gusman', 'Maestro', 150),
  ];

  constructor(private miServicio: ServicioEmpleadosService) {}

  agregarEmpleadoService(emplado: Empleado) {
    this.empleados.push(emplado);
    this.miServicio.muestaMensaje('Empleado agregado correctamente');
  }

  encontrarEmpleado(id: number) {
    let empleado: Empleado = this.empleados[id];
    return empleado;
  }

  actualizarEmpleadoService(id: number, empleado: Empleado) {
    this.empleados[id] = empleado;
  }

  EliminarEmpleadoService(id: number) {
    // this.empleados = this.empleados.filter((item, index) => index != id);
    this.empleados.splice(id, 1);
  }
}
