import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-iniciar-sesion',
    standalone: true,
    templateUrl: './iniciar-sesion.component.html',
    styleUrl: './iniciar-sesion.component.scss',
    imports: [FooterComponent, HeaderComponent,RouterLink]
})
export class IniciarSesionComponent {

}
