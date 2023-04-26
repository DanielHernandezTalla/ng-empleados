import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {
  title = 'Lista empleados';

  nombre: String = '';
  apellido: String = '';
  puesto: String = '';
  salario: Number = 0;

  empleados: Empleado[] = [];

  constructor(
    private empleadosService: EmpleadosService
  ) {
    // this.empleados = empleadosService.empleados;
  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  saveData() {
    this.empleadosService.agregarEmpleadoService(
      new Empleado(this.nombre, this.apellido, this.puesto, this.salario)
    );
    // this.empleados.push(
    //   new Empleado(this.nombre, this.apellido, this.puesto, this.salario)
    // );
    // this.miServicio.muestaMensaje('Empleado agregado correctamente');
  }
}
