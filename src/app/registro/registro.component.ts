import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-registro',
    standalone: true,
    templateUrl: './registro.component.html',
    styleUrl: './registro.component.scss',
    imports: [HeaderComponent, FooterComponent]
})
export class RegistroComponent {
  togglePassword() {
    const passwordInput = document.getElementById('password') as HTMLInputElement | null;
    const eyeIcon = document.getElementById('eye-icon') as HTMLElement | null;
    const eyeOffIcon = document.getElementById('eye-off-icon') as HTMLElement | null;

    if (passwordInput && eyeIcon && eyeOffIcon) {
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.add('hidden');
        eyeOffIcon.classList.remove('hidden');
      } else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('hidden');
        eyeOffIcon.classList.add('hidden');
      }
    }
  }

}
