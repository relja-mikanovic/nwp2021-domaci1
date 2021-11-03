import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Detection} from "../../models";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class DetectionService {

  private readonly apiUrl = environment.detectionApi;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  url: string = "";

  detectLanguage(text: string, clean: boolean): Observable<Detection>{
     this.url = `${this.apiUrl}?text=${text}&token=${localStorage.getItem("token")}&clean=${clean}`;
     this.historyService.setHistory(this.url);
    return this.httpClient.get<Detection>(this.url);
  }

}
