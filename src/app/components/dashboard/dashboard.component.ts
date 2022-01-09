import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  texto : string;
  nombre: string;
  urlImgen: string;
  habilitado : boolean;
  textoPlaceholder : string;
  textoparadosformaspadre : string;

  constructor() {
    this.texto = " Este es el componente dashoboard que va a ser mostrado en card"
    this.nombre = "";
    this.urlImgen = "";
    this.habilitado = false;
    this.textoPlaceholder = "Escriba aquí";
    this.textoparadosformaspadre = "Texto para dos formas del padre";
  }

  ngOnInit(): void {
  }

  getNombre() : string{
    return this.nombre = "María";
  }

  cambiar() : void{
    this.habilitado = !this.habilitado;
  }

  cambiartextopadreporcard(nuevoTexto:string) : void{
    this.texto = nuevoTexto;
  }

}
