import { Component, ElementRef } from '@angular/core';


declare var jQuery: any; // declara la variable global de jQuery


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
// Funcion deplegar Sidebar
  isMenuOpen = true;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }


}

