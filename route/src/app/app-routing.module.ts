import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  { //configuração da rota para abertura na página principal
    path:'',
    component:TitleComponent,
    pathMatch:'full'
  },
  { //configuração da rota secundária
    path:'portifolio',
    component: CardComponent,
    pathMatch:'prefix'
  },
  { //configuração de uma rota coringa
    //toda vez que escrever uma rota que não exista ele redireciona para padrão
    path:'**', redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
