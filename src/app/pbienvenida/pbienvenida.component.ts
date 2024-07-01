import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterLink } from '@angular/router';


@Component({
    selector: 'app-pbienvenida',
    standalone: true,
    templateUrl: './pbienvenida.component.html',
    styleUrl: './pbienvenida.component.scss',
    imports: [HeaderComponent, FooterComponent,RouterLink]
})
export class PBienvenidaComponent {
  
}
