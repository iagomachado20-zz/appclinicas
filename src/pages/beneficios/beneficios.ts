import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';
import { UtilProvider } from '../../providers/util';

@IonicPage()
@Component({
  selector: 'page-beneficios',
  templateUrl: 'beneficios.html',
})
export class BeneficiosPage {

  items = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public crudProvider: CrudProvider,
    public util: UtilProvider
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
    
    this.crudProvider.getData('/extras/todos')
    .subscribe(res => {

      this.items = res['Data'];

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

  doRefresh(event) {

    this.loadingData();

    setTimeout(() => {
      event.complete();
    }, 2000);
  }

}
