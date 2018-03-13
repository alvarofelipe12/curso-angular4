import {Component} from '@angular/core';

@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html',

})
export class PlantillasComponent {
    public titulo;
    public administrador;
    public dato_externo = 'Takatalvi';
    public identity = {
        id: 1,
        web: 'facebook.com/alvarofelipe',
        tematica: 'Desarrollo web'
    };
    constructor() {
        this.titulo = 'Plantillas ngTemplate en Angular';
        this.administrador = true;
        
    }
    cambiar() {
        if (this.administrador === true) {
            this.administrador = false;
        } else {
            this.administrador = true;
        }
    }
    public datos_del_hijo;
    recibirDatos(event) {
        this.datos_del_hijo = event;
        console.log(event.nombre);
    }
}
