import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicosPage, ClinicasModalPage } from './medicos';
import { CallNumber } from '@ionic-native/call-number';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MedicosPage,
    ClinicasModalPage
  ],
  providers: [CallNumber],
  entryComponents: [ClinicasModalPage],
  imports: [
    PipesModule,
    IonicPageModule.forChild(MedicosPage),
  ],
})
export class MedicosPageModule {}
