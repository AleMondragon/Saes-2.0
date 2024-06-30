import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-horario',
    standalone: true,
    templateUrl: './horario.component.html',
    styleUrl: './horario.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class HorarioComponent {

}
