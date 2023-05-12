import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolosFestasComponent } from './bolos-festas.component';

const routes: Routes = [
  {path:'bolos-festas', component: BolosFestasComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BolosFestasRoutingModule { }
