import {Component} from '@angular/core';
import {Coche} from './coches';
import {PeticionesService} from '../service/peticiones.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]

})
export class CochesComponent {
    public coche: Coche;
    public coches: Array<Coche>;
    public articulos;

    constructor(
            private _peticionesService: PeticionesService
        ) {
            this.coche = new Coche('', '', '');
            this.coches = [
                new Coche('Bmw Z3', '350', 'Blanco'),
                new Coche('Renault Megane', '120', 'Verde')
            ];
        }
        ngOnInit() {
            (this._peticionesService.getArticulos().subscribe(result => {
                this.articulos = result;
                if (!this.articulos) {
                    console.log('Error en el servidor');
                }
            }, error => {
                var err = <any>error;
                console.log(err);
            }));

        }

        onSubmit() {
            this.coches.push(this.coche);
            this.coche = new Coche('', '', '');
        }
    }

