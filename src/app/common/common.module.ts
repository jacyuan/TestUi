import { NgModule } from '@angular/core';
import { ServicesModule } from './services/services.module';
import { PipesModule } from './pipes/pipes.module';
import { ModelsModule } from './models/models.module';

@NgModule({
  imports: [
    ServicesModule,
    PipesModule,
    ModelsModule
  ],
  declarations: []
})
export class CommonModule { }
