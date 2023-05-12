import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolosTradcionaisComponent } from './bolos-tradcionais.component';

const routes: Routes = [
  {path:'bolos-tradcionais', component: BolosTradcionaisComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BolosTradcionaisRoutingModule { }
