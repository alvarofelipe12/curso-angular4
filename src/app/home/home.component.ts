import {Component} from '@angular/core';
import {RopaService} from '../service/ropa.service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    providers: [RopaService]
})

export class HomeComponent {
    public titulo = 'Pagina principal';
    public listadoRopa: Array<string>;
    public ropaAdded: string;
    public fecha;
    public nombre='JUAN lopez MaRtInEz';
    constructor(
        private _ropaService: RopaService
    ) {
        this.fecha = new Date(2017, 4, 15);
    }
    ngOnInit() {
        this.listadoRopa = this._ropaService.getRopa();
        console.log(this.listadoRopa);
    }
    guardarPrenda() {
        this._ropaService.addRopa(this.ropaAdded);
        this.ropaAdded = null;
    }

    eliminarPrenda(index: number) {
        this._ropaService.deleteRopa(index);
    }
}
