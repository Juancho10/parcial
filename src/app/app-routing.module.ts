import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcialComponent } from './comonentes/parcial/parcial.component';

const routes: Routes = [
  {path: 'notas', component:ParcialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
