import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';
import { UtilProvider } from '../../providers/util';
import { LocalizacaoProvider } from '../../providers/localizacao/localizacao';

@IonicPage()
@Component({
  selector: 'page-duvidas',
  templateUrl: 'duvidas.html',
})
export class DuvidasPage {

  items = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public crud: CrudProvider,
    public loadingCtrl: LoadingController,
    public util: UtilProvider,
    public location: LocalizacaoProvider
  ) {}

  ionViewDidLoad() {
    this.loadingData();
  }

  expandItem(item){
 
    this.items.map((listItem) => {

        if(item == listItem){
            listItem.open = !listItem.open;
        } else {
            listItem.open = false;
        }

        return listItem;

    });

  }

  loadingData() {

    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
  
    loading.present();

    const idEntity = this.location.getUnity;

    this.crud.getData(`/faq?entidadeId=${idEntity}`)
    .subscribe(res => {
      
      this.items = res['Data'];
      this.items.map((obj) => {
        obj['open'] = false;
        return obj;
      });

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
