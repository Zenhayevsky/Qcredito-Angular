import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadingComponent } from './lazyloading.component';
import { HomeComponent } from '../../views/home/home.component';
import { AnalisesComponent } from '../../views/analises/analises.component';
import { CadastrosComponent } from '../../views/cadastros/cadastros.component';
import { AnalisesCreateComponent } from '../../components/analisesCreate/analisesCreate.component';


const routes: Routes = [{ path: '', component: LazyloadingComponent, children: [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'analises',
    component: AnalisesComponent
  },
  {
    path:'cadastros',
    component: CadastrosComponent
  },
  {
    path:'analises/create',
    component: AnalisesCreateComponent
  }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyloadingRoutingModule { }
