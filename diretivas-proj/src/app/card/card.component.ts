import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //criando um vertor do tipo string vazia
  produtos:string[]=[];
  produtos2:string[]=[];
  menuType:string = "";

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
    ]
    this.produtos2 = [
      "laranja",
      "banana",
      "maça",
      "pera",
      "abacate"
    ]
  }

  ngOnInit(): void {
  }
  //metodos adicionar e remover usados para o conceito de reatividade do componente
  adicionar(){
    this.produtos.push("Diego");
  }
  remover(){
    this.produtos.pop();
  }

  apagar(index:number){
    this.produtos2.splice(index, 1);
  }
}
