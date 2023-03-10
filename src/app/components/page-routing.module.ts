
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
    {path: '', component: DashboardComponent, 
    children: [
        {path: 'perfil', component: PerfilComponent}
        

    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PageRoutingModule { }