import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUComponent } from './cadastro-u.component';

const routes: Routes = [
  {path:'cadastrar-usuario', component: CadastroUComponent},

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroURoutingModule { }
