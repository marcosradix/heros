import { MarvelHerosService } from './mavel--heros-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel-heros',
  templateUrl: './marvel-heros.component.html',
  styleUrls: ['./marvel-heros.component.css'],
  providers: [MarvelHerosService]
})
export class MarvelHerosComponent implements OnInit {

  private heros = [] ;
  private entradaTexto: string= "";
  private iniciado: boolean;
changeHeroName(){
  this.heros.push(this.entradaTexto);
  this.entradaTexto = "";
}

removerHeroName(index: number){
  this.heros.splice(index, 1);
}

iniciar(){
this.iniciado = !this.iniciado
}

  constructor(private ajax: MarvelHerosService) {
    this.heros = ajax.heros;

   }

  ngOnInit() {
  }

}
