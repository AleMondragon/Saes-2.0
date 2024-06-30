import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent{
  constructor(private router: Router) {}

  redirigirADatos() {
    // Redirige a la ruta '/datos'
    this.router.navigate(['/datos']);
  }
  redirigirAHorario() {
    // Redirige a la ruta '/horario'
    this.router.navigate(['/horario']);
  }
  redirigirACalif() {
    // Redirige a la ruta '/calificaciones'
    this.router.navigate(['/calificaciones']);
  }
  redirigirAInsRei() {
    // Redirige a la ruta '/ins/reins'
    this.router.navigate(['/ins/reins']);
  }

}

