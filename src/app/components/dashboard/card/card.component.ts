import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() texto : string;
  @Output() nuevoEvento = new EventEmitter<string>()

  @Input() textodedosformas!: String;
  @Output() textodedosformasChange = new EventEmitter<string>();


  constructor() {
    this.texto = "";
   }

  ngOnInit(): void {
  }

  cambiartextopadre(){
    this.nuevoEvento.emit("El padre ha cambiado debido a card");
  }

  cambiartextodosformas(valor : string): void{
    this.textodedosformasChange.emit(valor);
  }

}
