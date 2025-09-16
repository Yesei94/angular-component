import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotonYesica } from './boton-yesica/boton-yesica';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BotonYesica
  ],
  exports: [
    BotonYesica
  ]
})
export class BotonYesicaLibModule { }
