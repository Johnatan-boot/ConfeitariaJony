import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminGuard } from 'src/app/services/auth/admin-guard.service';

const routes: Routes = [
  {path:'admin', component: AdminComponent,
  //canActivate:[AdminGuard],
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
