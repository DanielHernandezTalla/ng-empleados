import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css'],
})
export class ActualizaComponentComponent {
  title = 'Lista empleados';

  indice: number;
  nombre: String = '';
  apellido: String = '';
  puesto: String = '';
  salario: Number = 0;

  empleados: Empleado[] = [];

  accion:number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {

    this.accion=this.route.snapshot.queryParams['accion'];
    
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(
      this.indice
    );
    this.nombre = empleado.nombre;
    this.apellido = empleado.apellido;
    this.puesto = empleado.puesto;
    this.salario = empleado.salario;
  }

  updateData() {
    this.empleadosService.actualizarEmpleadoService(
      this.indice,
      new Empleado(this.nombre, this.apellido, this.puesto, this.salario)
    );

    this.volverHome();
  }

  deleteData() {
    this.empleadosService.EliminarEmpleadoService(this.indice);

    this.volverHome();
  }

  volverHome() {
    this.router.navigate(['']);
  }
}
