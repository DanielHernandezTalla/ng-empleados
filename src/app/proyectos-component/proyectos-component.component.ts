import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css'],
})
export class ProyectosComponentComponent {
  title = 'Lista empleados';

  nombre: String = '';
  apellido: String = '';
  puesto: String = '';
  salario: Number = 0;

  empleados: Empleado[] = [];

  constructor(
    private router: Router,
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  saveData() {
    this.empleadosService.agregarEmpleadoService(
      new Empleado(this.nombre, this.apellido, this.puesto, this.salario)
    );

    this.volverHome();
  }

  volverHome() {
    this.router.navigate(['']);
  }
}
