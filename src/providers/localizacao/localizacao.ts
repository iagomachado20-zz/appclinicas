import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalizacaoProvider {

  constructor(
    public http: HttpClient
  ) {}

  public saveUnity(value: any) {
    localStorage.setItem('unidade', value);
  }

  public get isSaveUnity() {
    
    if (localStorage.getItem('unidade')) {
      return true;
    }

    return false;

  }

  public get getUnity() {
    return localStorage.getItem('unidade');
  }

}
