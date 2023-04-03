import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { AnalisesComponent } from './views/analises/analises.component';
import { CadastrosComponent } from './views/cadastros/cadastros.component';
import { AnalisesCreateComponent } from './components/analisesCreate/analisesCreate.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/lazyloading/lazyloading.module').then(m => m.LazyloadingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
