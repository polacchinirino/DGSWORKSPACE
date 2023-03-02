import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Pagina3Component } from './pagina3/pagina3.component';

const routes: Routes = [
  {
    path: '',
    component: Pagina1Component
  },
  {
    path: 'categorie',
    component: Pagina2Component
  },
  {
    path: 'home',
    component: Pagina1Component
  }
  ,
  {
    path: 'ricerca',
    component: Pagina3Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
