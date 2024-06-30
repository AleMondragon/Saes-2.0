import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-usuario',
    standalone: true,
    templateUrl: './usuario.component.html',
    styleUrl: './usuario.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class UsuarioComponent {

}
