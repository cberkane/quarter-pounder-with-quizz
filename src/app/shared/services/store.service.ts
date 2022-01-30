import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public getSessionStore(key: string) {
    return sessionStorage.getItem(key);
  }

  public setSessionStore(key: string, value: string) {
    sessionStorage.setItem(key, value);
  }
}
