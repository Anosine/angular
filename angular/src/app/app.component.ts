import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkaiciuokleComponent } from "./skaiciuokle/skaiciuokle.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkaiciuokleComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
