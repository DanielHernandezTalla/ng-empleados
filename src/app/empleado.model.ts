
export class Empleado {

  nombre: String = '';
  apellido: String = '';
  puesto: String = '';
  salario: Number = 0;

  constructor(
    nombre: String,
    apellido: String,
    puesto: String,
    salario: Number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.puesto = puesto;
    this.salario = salario;
  }
}
