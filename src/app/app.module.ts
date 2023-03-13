import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rutas Principales
import { AppRoutingModule } from './app-routing.module';
//
import { AppComponent } from './app.component';
import { LoginComponent } from './Views/login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EntregaInterceptor } from './interceptors/entrega.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './Views/register/register.component';
import { DashboardComponent } from './Views/home/dashboard/dashboard.component';
import { NavComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
   
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: EntregaInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
