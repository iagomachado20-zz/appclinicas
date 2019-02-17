import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InitPage } from '../pages/home/home';
import { ConsultasPage } from '../pages/consultas/consultas';
import { SelecioneLocalizacaoPage } from '../pages/selecione-localizacao/selecione-localizacao';
import { LocalizacaoProvider } from '../providers/localizacao/localizacao';
import { BeneficiosPage } from '../pages/beneficios/beneficios';
import { ParceirosPage } from '../pages/parceiros/parceiros';
import { InformacoesPage } from '../pages/informacoes/informacoes';
import { CacheService } from 'ionic-cache';
import { Network } from '@ionic-native/network';
import { NetWorkProvider } from '../providers/crud/network';
import { UtilProvider } from '../providers/util';
import { DuvidasPage } from '../pages/duvidas/duvidas';
import { ExamesPage } from '../pages/exames/exames';
import { ParceirosCategoriaPage } from '../pages/parceiros/parceiros-categoria/parceiros-categoria';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = SelecioneLocalizacaoPage;
  pages = [];
  
  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public locationProvider: LocalizacaoProvider,
    public splashScreen: SplashScreen,
    public cache: CacheService,
    public events: Events,
    public network: Network,
    private util: UtilProvider,
    public networkProvider: NetWorkProvider
    ) {
    this.initializeApp();
      
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'home', component: InitPage },
      { title: 'Consultas Médicas', icon: 'medkit', component: ConsultasPage },
      { title: 'Exames', icon: 'pulse', component: ExamesPage },
      { title: 'Benefícios Extras', icon:'thumbs-up', component: BeneficiosPage },
      { title: 'Parceiros de Descontos', icon: 'swap', component: ParceirosCategoriaPage },  
      { title: 'Informações', icon: 'information-circle', component: InformacoesPage },
      { title: 'Dúvidas Frequentes', icon: 'help', component: DuvidasPage },
      { title: 'SysproCard', icon: 'custom-mynewicon', component: InitPage },
      { title: 'Localização', icon: 'pin', component: SelecioneLocalizacaoPage }
    ];

  }

  initializeApp() {

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.networkProvider.initializeNetworkEvents();

      // Offline event
      this.events.subscribe('network:offline', () => {

        this.util.sendToast('Sem conexão com a internet.'); 

      });

      // Online event
      this.events.subscribe('network:online', () => {
          
        this.util.sendToast('Conexão reconhecida'); 

      });

      this.cache.setDefaultTTL(60 * 10);
      this.cache.setOfflineInvalidate(true);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    // Verificando se há valor armazenado em storage
    if (this.locationProvider.isSaveUnity) {
      this.rootPage = InitPage;
    }

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}
