import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { PBienvenidaComponent } from "./pbienvenida/pbienvenida.component";
import { RegistroComponent } from "./registro/registro.component";
import { IniciarSesionComponent } from "./iniciar-sesion/iniciar-sesion.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, FooterComponent, HeaderComponent, PBienvenidaComponent, RegistroComponent, IniciarSesionComponent]
})
export class AppComponent {
  title = 'SaesFront';
}
