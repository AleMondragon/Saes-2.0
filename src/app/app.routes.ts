import { RouterModule,Routes } from '@angular/router';
import { PBienvenidaComponent } from './pbienvenida/pbienvenida.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';
import { CalificacionesComponent } from './calificaciones/calificaciones.component';
import { HorarioComponent } from './horario/horario.component';
import { DatosAcaComponent } from './datos-aca/datos-aca.component';
import { InscripcionReComponent } from './inscripcion-re/inscripcion-re.component';
import { UsuarioComponent } from './usuario/usuario.component';

export const routes: Routes = [
    {path:'',redirectTo:'/bienvenida', pathMatch:'full'},
    {path:'iniciar', component:IniciarSesionComponent},
    {path:'registro',component:RegistroComponent},
    {path:'bienvenida',component:PBienvenidaComponent},
    {path:'calificaciones',component:CalificacionesComponent},
    {path:'horario',component:HorarioComponent},
    {path:'datos',component:DatosAcaComponent},
    {path:'ins/reins',component:InscripcionReComponent},
    {path:'alumno',component:UsuarioComponent}
];
