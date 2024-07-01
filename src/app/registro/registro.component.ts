import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterLink } from '@angular/router';
import * as argon2 from 'argon2-browser';

@Component({
    selector: 'app-registro',
    standalone: true,
    templateUrl: './registro.component.html',
    styleUrl: './registro.component.scss',
    imports: [HeaderComponent, FooterComponent,RouterLink]
})
export class RegistroComponent {
   // Definir los campos necesarios
   //fullName: string = '';
   /**email: string = '';
   password: string = '';
 
   async register() {
     try {
       // Hashear la contraseña usando Argon2
       const hash = await argon2.hash({
         pass: this.password,
         salt: 'somesalt', // Deberías usar un salt único y seguro
         type: argon2.ArgonType.Argon2id,
         time: 2,
         mem: 512, // Memoria en KB
         parallelism: 1
       });
 
       // Aquí puedes enviar el hash al servidor en lugar de la contraseña en texto plano
       console.log('Hashed password:', hash.encoded);
 
       // Implementa la lógica para enviar los datos de registro al servidor
 
     } catch (err) {
       console.error('Error hashing password:', err);
     }
   }**/
 }

