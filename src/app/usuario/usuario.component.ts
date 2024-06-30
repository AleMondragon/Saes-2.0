import { Component, Input } from '@angular/core';
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
    @Input()
    nombreCompleto!: string;
    @Input()
    cumpleanos!: string;
    @Input()
    edad!: number;
    @Input()
    correo!: string;
    @Input()
    genero!: string;
    @Input()
    numeroBoleta!: string;
    @Input()
    escuelaProcedencia!: string;

  // Método para guardar los datos (a implementar)
  guardarDatos() {
    // Aquí se implementaría la lógica para guardar los datos
  }
}
