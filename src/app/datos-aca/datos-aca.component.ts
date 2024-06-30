import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-datos-aca',
    standalone: true,
    templateUrl: './datos-aca.component.html',
    styleUrl: './datos-aca.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class DatosAcaComponent {

}
