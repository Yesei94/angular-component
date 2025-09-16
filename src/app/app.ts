import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonYesica } from './boton-yesica/boton-yesica';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BotonYesica],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Libreria');
  mensaje: string = 'Presiona el botón';

  onBotonClick(): void {
    this.mensaje = '¡Botón presionado!';
  }
}
