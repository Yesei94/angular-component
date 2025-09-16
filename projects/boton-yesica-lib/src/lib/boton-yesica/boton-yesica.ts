import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-boton-yesica',
  imports: [],
  templateUrl: './boton-yesica.html',
  styleUrl: './boton-yesica.css'
})
export class BotonYesica {
  @Input() texto: string = 'Botón de Yesica';
  @Input() tipo: 'primary' | 'secondary' | 'success' | 'danger' = 'primary';
  @Input() deshabilitado: boolean = false;
  
  @Output() clickEvent = new EventEmitter<void>();

  onClick(): void {
    if (!this.deshabilitado) {
      this.clickEvent.emit();
    }
  }
}
