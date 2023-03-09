import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil/perfil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageRoutingModule } from './page-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    PerfilComponent,
    DashboardComponent,
    SidenavComponent,
    
  ],
  imports: [
    CommonModule,
    PageRoutingModule,
    
  ]
})
export class PageModule { }
