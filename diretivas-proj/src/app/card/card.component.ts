import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  //criando um vertor do tipo string vazia
  produtos:string[]=[];

  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"
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
}
