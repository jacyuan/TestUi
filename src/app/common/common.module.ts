import { NgModule } from '@angular/core';
import { ServicesModule } from './services/services.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  imports: [
    ServicesModule,
    PipesModule
  ],
  declarations: []
})
export class CommonModule { }
