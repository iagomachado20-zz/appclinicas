import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage, InitPage } from '../pages/home/home';
import { ConsultasPage } from '../pages/consultas/consultas';

import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SelecioneLocalizacaoPageModule } from '../pages/selecione-localizacao/selecione-localizacao.module';
import { DuvidasPageModule } from '../pages/duvidas/duvidas.module';
import { DuvidasPage } from '../pages/duvidas/duvidas';
import { CrudProvider } from '../providers/crud/crud';
import { UtilProvider } from '../providers/util';
import { HttpClientModule } from '@angular/common/http';
import { LocalizacaoProvider } from '../providers/localizacao/localizacao';
import { MedicosPage } from '../pages/medicos/medicos';
import { MedicosPageModule } from '../pages/medicos/medicos.module';
import { BeneficiosPageModule } from '../pages/beneficios/beneficios.module';
import { BeneficiosPage } from '../pages/beneficios/beneficios';
import { ParceirosPage } from '../pages/parceiros/parceiros';
import { ParceiroDetalhePage } from '../pages/parceiros/parceiro-detalhe/parceiro-detalhe';
import { InformacoesPageModule } from '../pages/informacoes/informacoes.module';
import { InformacoesPage } from '../pages/informacoes/informacoes';
import { ExamesPage } from '../pages/exames/exames';
import { ExameDetalhePage } from '../pages/exame-detalhe/exame-detalhe';
import { CacheModule } from 'ionic-cache';
import { Network } from '@ionic-native/network';
import { NetWorkProvider } from '../providers/crud/network';
import { PipesModule } from '../pipes/pipes.module';
import { ParceirosCategoriaPage } from '../pages/parceiros/parceiros-categoria/parceiros-categoria';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ConsultasPage,
    ParceirosPage,
    ParceiroDetalhePage,
    ParceirosCategoriaPage,
    ExamesPage,
    InitPage,
    ExameDetalhePage
  ],
  imports: [
    BrowserModule,
    SelecioneLocalizacaoPageModule,
    DuvidasPageModule,
    PipesModule,
    MedicosPageModule,
    InformacoesPageModule,
    BeneficiosPageModule,
    CacheModule.forRoot(),
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      iconMode: 'md',
      backButtonIcon: 'md-arrow-back'
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DuvidasPage,
    ConsultasPage,
    InitPage,
    MedicosPage,
    BeneficiosPage,
    InformacoesPage,
    ParceirosPage,
    ParceiroDetalhePage,
    ExamesPage,
    ExameDetalhePage,
    ParceirosCategoriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Network,
    NetWorkProvider,
    UtilProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CrudProvider,
    LocalizacaoProvider
  ]
})
export class AppModule {}
