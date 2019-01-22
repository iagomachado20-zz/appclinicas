import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController, Platform } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

@Injectable()
export class UtilProvider {

  constructor(
    public http: HttpClient, 
    public toastCtrl: ToastController,
    public call: CallNumber,
    public platform: Platform
  ) {}

  public sendToast(msg:string) {

    let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom'
    });

    toast.present();

  }


  public callNumber(number: string) {

    if (!number) {
      return false;
    }

    this.call.callNumber(number, true)
    .then(res => console.log('Launched dialer!', res))
    .catch(err => console.log('Error launching dialer', err));

  }


  public openMail(mail:any) {

    if (!mail) {
      return false;
    }

    this.platform.ready().then(() => {
      window.open('mailto:' + mail);
    });
  }

  public openWhats(number:any) {

    if (!number) {
      return false;
    }

    let formated = number.replace(/([-()\s])/g, '');

    console.log(formated);

    this.platform.ready().then(() => {
      window.open(`https://api.whatsapp.com/send?phone=55${formated}`);
    });
  }

}
