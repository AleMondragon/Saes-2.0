import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-calificaciones',
    standalone: true,
    templateUrl: './calificaciones.component.html',
    styleUrl: './calificaciones.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class CalificacionesComponent {

}
