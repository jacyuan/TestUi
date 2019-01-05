import { NgModule } from '@angular/core';
import { ServicesModule } from './services/services.module';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';

@NgModule({
  imports: [
    ServicesModule,
    PipesModule,
    DirectivesModule
  ],
  declarations: []
})
export class AppCommonModule { }
