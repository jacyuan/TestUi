import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxnToImageDirective } from './svg/rxn-to-image.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [RxnToImageDirective],
  exports: [RxnToImageDirective]
})
export class DirectivesModule {}
