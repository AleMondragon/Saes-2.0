import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-inscripcion-re',
    standalone: true,
    templateUrl: './inscripcion-re.component.html',
    styleUrl: './inscripcion-re.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class InscripcionReComponent {

}
