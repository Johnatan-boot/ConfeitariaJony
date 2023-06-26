import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { SidebarComponent } from './components';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
   SidebarComponent,
  ],
  imports: [

   CommonModule,
    NgbModule,
    MatCardModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot()


  ],

})
export class SidebarModule { }
