import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConverteMoedasComponent} from "./converte-moedas/converte-moedas.component";

const routes: Routes = [
  {
    path:"",
    component: ConverteMoedasComponent
  },
  {
    path:"convertmoedas",
    component: ConverteMoedasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
