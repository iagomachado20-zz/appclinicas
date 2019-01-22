import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_API } from '../../app/config';
import { CacheService } from 'ionic-cache';
import { Network } from '@ionic-native/network';
import { Events } from 'ionic-angular';
import { UtilProvider } from '../util';

@Injectable()
export class CrudProvider {

  requestType: any;

  constructor(
    public http: HttpClient,
    public cache: CacheService,
    public events: Events,
    public util: UtilProvider
  ) {}


  public getData(area:string, params='') {

    const url = `${BASE_API}${area}${params}`;
    const req = this.http.get(url);
    
    const cacherequest = this.cache.loadFromObservable(url, req);

    return cacherequest;

  }


}
