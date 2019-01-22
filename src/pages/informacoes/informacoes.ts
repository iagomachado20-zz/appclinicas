import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';
import { UtilProvider } from '../../providers/util';
import { LocalizacaoProvider } from '../../providers/localizacao/localizacao';

/**
 * Generated class for the InformacoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacoes',
  templateUrl: 'informacoes.html',
})
export class InformacoesPage {

  information = new Object();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public crudProvider: CrudProvider,
    public util: UtilProvider,
    public location: LocalizacaoProvider
  ) {
  }

  ionViewDidLoad() {
    this.loadingData();
  }

  loadingData() {

    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
  
    loading.present();

    const entity = this.location.getUnity;

    this.crudProvider.getData('/entidades/informacoes?entidadeId='+entity)
    .subscribe(res => {
      
      this.information = res['Data'];

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

}
