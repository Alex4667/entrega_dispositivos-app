import { Component, ElementRef } from '@angular/core';
declare var jQuery: any; // declara la variable global de jQuery


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    // cierra el menú hamburguesa cuando se hace clic en un elemento del menú
    jQuery(this.elRef.nativeElement).find('.nav-link').on('click', () => {
    jQuery(this.elRef.nativeElement).find('.navbar-collapse').collapse('hide');
    });
    }
    
    

}
