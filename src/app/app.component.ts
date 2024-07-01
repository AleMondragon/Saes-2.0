import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,RouterLink,FooterComponent, HeaderComponent, ]
})
export class AppComponent {
  title = 'SaesFront';
}
