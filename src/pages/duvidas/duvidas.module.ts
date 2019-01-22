import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DuvidasPage } from './duvidas';
import { ComponentsModule } from '../../components/components.module';
import { AcordionComponent } from '../../components/acordion/acordion';

@NgModule({
  declarations: [
    DuvidasPage
  ],
  imports: [
    IonicPageModule.forChild(DuvidasPage),
    ComponentsModule
  ],
})
export class DuvidasPageModule {}
