import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { CrudProvider } from '../../../providers/crud/crud';
import { UtilProvider } from '../../../providers/util';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import { LocalizacaoProvider } from '../../../providers/localizacao/localizacao';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-parceiro',
  templateUrl: 'parceiro-detalhe.html'
})
export class ParceiroDetalhePage {
  selectedItem: any;
  parceiroData = new Object();
  items = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public crudProvider: CrudProvider,
    public util: UtilProvider,
    public locationProvider: LocalizacaoProvider
  ) {

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.items = [];

    this.loadingData();

  }

  loadingData() {

    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
  
    loading.present();

    this.getForkJoin()
    .subscribe(res => {

      this.parceiroData = res[0]['Data'];
      this.items = res[1]['Data'];

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

  getForkJoin() {

    const idParceiro = this.navParams.get('id');

    const parceiro$ = this.crudProvider.getData(`/parceiros/detalhes/${idParceiro}`);
    const beneficios$ = this.crudProvider.getData(`/parceiros/beneficios/${idParceiro}`);

    return Observable.forkJoin([parceiro$, beneficios$]);

  }

  callToNumber(number:string) {
    this.util.callNumber(number);
  }

  OpenMail(mail) {
    this.util.openMail(mail);
  }

  openWhats(number) {
    
    this.util.openWhats(number);
  }
  
}
