import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConsultasPage } from '../consultas/consultas';
import { DuvidasPage } from '../duvidas/duvidas';
import { SelecioneLocalizacaoPage } from '../selecione-localizacao/selecione-localizacao';
import { BeneficiosPage } from '../beneficios/beneficios';
import { ParceirosPage } from '../parceiros/parceiros';
import { InformacoesPage } from '../informacoes/informacoes';
import { ExamesPage } from '../exames/exames';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1 = InitPage;
  tab2 = InformacoesPage;
  tab4 = DuvidasPage;
  tab3 = SelecioneLocalizacaoPage;

  constructor(public navCtrl: NavController) {
    
  }

}

@Component({
  selector: 'page-init',
  templateUrl: 'init.html'
})
export class InitPage {
  
  tab1 = InitPage;
  tab2 = InformacoesPage;
  tab4 = DuvidasPage;
  tab3 = SelecioneLocalizacaoPage;
  consultaPage = ConsultasPage;
  beneficioPage = BeneficiosPage;
  parceiroPage = ParceirosPage;
  examePage = ExamesPage;

  constructor(public navCtrl: NavController) {
  }

}