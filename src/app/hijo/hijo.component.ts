import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'componente-hijo',
    template: `
    <p>Este es el {{title}}</p>
    <ul>
    <li>{{propiedad_uno}}</li>
    <li>{{propiedad_dos}}</li>
    </ul>
    <button (click)="enviar()">Enviar datos al padre</button>
    `
})
export class HijoComponent {
    public title: string;
    @Input() propiedad_uno: string;
    @Input() propiedad_dos: string;

    @Output() desde_el_hijo = new EventEmitter();
    constructor() {
        this.title = 'Componente Hijo';
    }
    ngOnInit() {
        console.log(this.propiedad_uno, this.propiedad_dos);
    }
    enviar() {
        this.desde_el_hijo.emit({nombre: 'Takatalvi WEB', web: 'facebook.com/alvarofelipe', twitter: '@alvarofelipe_1'});
    }
}
