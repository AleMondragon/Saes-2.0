import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { Router } from '@angular/router';


@Component({
    selector: 'app-pbienvenida',
    standalone: true,
    templateUrl: './pbienvenida.component.html',
    styleUrl: './pbienvenida.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class PBienvenidaComponent {
  constructor(private router: Router) {}
    registro() {
        // Redirige a la ruta '/datos'
        this.router.navigate(['/registro']);
      }
      inicio() {
        // Redirige a la ruta '/horario'
        this.router.navigate(['/iniciar']);
      }
}
