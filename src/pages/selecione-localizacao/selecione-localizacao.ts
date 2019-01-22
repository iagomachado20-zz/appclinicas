import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';
import { UtilProvider } from '../../providers/util';
import { LocalizacaoProvider } from '../../providers/localizacao/localizacao';
import { InitPage } from '../home/home';

/**
 * Generated class for the SelecioneLocalizacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selecione-localizacao',
  templateUrl: 'selecione-localizacao.html',
})
export class SelecioneLocalizacaoPage {

  unitySelect: any;
  private unitys = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    private crudProvider: CrudProvider,
    public toast: ToastController,
    private util: UtilProvider,
    private locationProvider: LocalizacaoProvider
  ) {
  }

  ionViewDidLoad() {
    
    this.loadingData();

    this.unitySelect = this.locationProvider.getUnity;

  }

  loadingData() {

    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
  
    loading.present();

    this.crudProvider.getData('/entidades/cidades')
    .subscribe(res => {
      
      this.unitys = res['Data'];

      setTimeout(() => {
        loading.dismiss();
      }, 1000);

    },
    error => {


      this.util.sendToast('Ocorreu um erro ao solicitar seu dados!');

      setTimeout(() => {
        loading.dismiss();
      }, 1000);
    });

    
  }

  choiceUnity() {

    if (this.unitySelect) {
      this.locationProvider.saveUnity(this.unitySelect);
      this.navCtrl.setRoot(InitPage);
    }

  }

}
