import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor() { }

  historyArray: string[] = [];

  setHistory(url: string){

    const date = new Date();
    const time = date.toLocaleString("sr-RS");
      this.historyArray.push("[" + time + "] GET " + url);
  }

  getHistory(){
    return this.historyArray;
  }

}
