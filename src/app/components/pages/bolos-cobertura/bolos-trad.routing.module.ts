import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolosCoberturaComponent } from './bolos-cobertura.component';

const routes: Routes = [
  {path:'bolos-cobertura', component: BolosCoberturaComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BolosCoberturaRoutingModule { }
