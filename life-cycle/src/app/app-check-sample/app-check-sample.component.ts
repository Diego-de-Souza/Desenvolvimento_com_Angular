import { Component, 
        OnInit,
        DoCheck,
        AfterContentChecked,
        AfterContentInit,
        AfterViewChecked,
        AfterViewInit, 
        OnDestroy 
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './app-check-sample.component.html',
  styleUrls: ['./app-check-sample.component.css']
})
export class AppCheckSampleComponent 
implements OnInit,
          DoCheck,        
          AfterContentChecked,
          AfterContentInit,
          AfterViewChecked,
          AfterViewInit,
          OnDestroy 
{

  quantidade:number = 0 ;
  
  constructor() { }
   
  adicionar(){
    this.quantidade ++;
  }

  decrementar(){
    this.quantidade --;
  }

  //checked -> content -> view

  //quando o primeiro conteudo é inicializado
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  //depois da inicialização da view
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  //apos alguma alteração, verifica o conteudo
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    console.log(this.quantidade);
  }

  //apos alguma alteração verifica a view
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnDestroy(): void {
    console.log("Goodbye my friend!");
  }
}
