import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController, ViewController } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';
import { LocalizacaoProvider } from '../../providers/localizacao/localizacao';
import { UtilProvider } from '../../providers/util';
import { CallNumber } from '@ionic-native/call-number';


@IonicPage()
@Component({
  selector: 'page-medicos',
  templateUrl: 'medicos.html',
})
export class MedicosPage {

  items = [];
  titlePage: string = 'Consultas Médicas';

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public crudProvider: CrudProvider,
    public locationProvider: LocalizacaoProvider,
    public util: UtilProvider,
    public callNumber: CallNumber,
    public modalCtrl: ModalController
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
    this.titlePage = this.navParams.get('especialidade');
    const idUnity = this.locationProvider.getUnity;

    this.crudProvider
    .getData(`/especialidades/medicos?entidadeId=${idUnity}&especialidadeId=${idEspec}`)
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

  OpenMail(mail) {
    this.util.openMail(mail);
  }

  openModal(clinicas) {

    const modal = this.modalCtrl.create(ClinicasModalPage, {clinicas: clinicas});
    modal.present();

  }

  doRefresh(event) {

    this.loadingData();

    setTimeout(() => {
      event.complete();
    }, 2000);
  }

}

@Component({
  selector: 'list-clinicas',
  templateUrl: 'clinicas-modal.html',
})
export class ClinicasModalPage {

  items = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public viewCtrl: ViewController,
    public util: UtilProvider
  ) {}

  ionViewDidLoad() {
    this.getDate();
  }

  backPage() {
    this.viewCtrl.dismiss();
  }

  getDate() {

    this.items = this.navParams.get('clinicas');

  }

  callToNumber(number:string) {
    this.util.callNumber(number);
  }

}
