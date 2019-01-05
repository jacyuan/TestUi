import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterDecompositionComponent } from './character-decomposition/character-decomposition.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CharacterDecompositionComponent],
  exports: [CharacterDecompositionComponent]
})
export class ComponentsModule {}
