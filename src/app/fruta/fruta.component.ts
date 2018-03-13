import {Component} from "@angular/core";

@Component({
	selector: "fruta",
	templateUrl:'./fruta.component.html'
})

export class FrutaComponent{
	public nombre_componente="componente de fruta";
	public listado_frutas="Naranja, Manza, Pera y Sandia";
	public nombre:string/*="david"*/;
	public edad:number/*=55*/;
	public mayorDeEdad:boolean/*=true*/;
	public trabajos:Array<string>=["Carpintero","albañil","fontanero"];
	public trabajos2:Array<any>=[2,"patata"];
	comodin:any/*=23*/;

	constructor(){
		/*console.log(this.trabajos);
		console.log(this.comodin);*/
		this.nombre="Victor Robles";
		this.edad=77;
		this.mayorDeEdad=false;
		this.comodin="SI";
		
	}
	ngOnInit(){
		this.holaMundo(this.nombre);
		//variables y alcance
		var uno=8;
		var dos=15;
		if (uno===8) {
			let uno=3;
			var dos=88;
			console.log("dentro del if "+uno+" "+dos);
		}
		console.log("fuera del if "+uno+" "+dos);
	}
	holaMundo(nombre){
		this.nombre="potato";
		console.log("Hola mundo!! "+this.nombre);
	}
}