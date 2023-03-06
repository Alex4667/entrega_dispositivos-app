import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageRoutingModule } from './page-routing.module';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    PerfilComponent,
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    
  ]
})
export class PageModule { }
