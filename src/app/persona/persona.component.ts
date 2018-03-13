import { Component } from '@angular/core';
import { Persona } from './persona';
import { NgClass } from '@angular/common';
@Component({
	selector: 'persona',
	templateUrl: './persona.component.html'
})

export class PersonaComponent {
	public asd = 'componente personas';
	public empleado: Persona;
	public trabajadores: Array<Persona>;
	public trabajador_externo: boolean;
	public color: string;
	public colorSeleccionado: string;

    constructor() {
		this.empleado = new Persona('David Lopez', 45, 'Cocinero', true);
		this.trabajadores = [new Persona('Manolo Martinez', 35, 'admin', true),
		new Persona('Ana Lopez', 25, 'Cocinero', true),
		new Persona('Victor Valdez', 66, 'programador', false)];
		this.trabajador_externo = false;
		this.color = 'blue';
		this.colorSeleccionado = '#ccc';
	}


    ngOnInit() {
		console.log(this.empleado);
        console.log(this.trabajadores);
	}
	cambiarExterno(valor) {
		this.trabajador_externo = valor;
	}

	logColorSeleccionado() {
	console.warn(this.colorSeleccionado);
	}
}
