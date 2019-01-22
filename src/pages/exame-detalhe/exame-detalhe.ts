import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LocalizacaoProvider } from '../../providers/localizacao/localizacao';
import { CrudProvider } from '../../providers/crud/crud';
import { UtilProvider } from '../../providers/util';


@IonicPage()
@Component({
  selector: 'page-exame-detalhe',
  templateUrl: 'exame-detalhe.html',
})
export class ExameDetalhePage {

  items = [];
  titlePage: string = 'Médicos';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public locationProvider: LocalizacaoProvider,
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

    const idEspec = this.navParams.get('id');
    const idUnity = this.locationProvider.getUnity;
    this.titlePage = this.navParams.get('title');

    this.crudProvider
    .getData(`/exames/detalhes?categoriaId=${idEspec}&entidadeId=${idUnity}`)
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

  callToNumber(number:string) {
    this.util.callNumber(number);
  }

  callMail(mail:string) {
    this.util.openMail(mail);
  }

}
