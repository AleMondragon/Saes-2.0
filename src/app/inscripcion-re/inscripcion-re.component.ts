import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
    selector: 'app-inscripcion-re',
    standalone: true,
    templateUrl: './inscripcion-re.component.html',
    styleUrl: './inscripcion-re.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class InscripcionReComponent {
    nombreCompleto: string = 'Juan Pérez';
    numeroBoleta: string = '2022123456';
    carrera: string = 'Ingeniería en Sistemas Computacionales';
  
    inscripciones: any = {
      matematicas: { grupo: '', turno: '' },
      programacion: { grupo: '', turno: '' },
      // Añadir más materias según sea necesario
    };
  
    updateGrupo(materia: string, event: Event) {
      const selectElement = event.target as HTMLSelectElement;
      const grupo = selectElement.value;
      this.inscripciones[materia].grupo = grupo;
    }
  
    updateTurno(materia: string, event: Event) {
      const selectElement = event.target as HTMLSelectElement;
      const turno = selectElement.value;
      this.inscripciones[materia].turno = turno;
    }
  
    finalizarInscripcion() {
      console.log('Inscripción finalizada:', this.inscripciones);
      alert('Inscripción finalizada. Revisa la consola para ver los detalles.');
    }
  }