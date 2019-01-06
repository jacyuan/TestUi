import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CharacterDecompositionComponent } from './character-decomposition/character-decomposition.component';
import { DirectivesModule } from '@common/directives/directives.module';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [CommonModule, FormsModule, DirectivesModule],
  declarations: [CharacterDecompositionComponent, LoaderComponent],
  exports: [CharacterDecompositionComponent]
})
export class ComponentsModule {}
