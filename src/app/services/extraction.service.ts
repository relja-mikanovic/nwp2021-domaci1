import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Extraction} from "../../models";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class ExtractionService {

  private readonly apiUrl = environment.extractionApi;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  url: string = "";

  extractEntities(text: string, min_confidence: number, includeString: string): Observable<Extraction>{
    this.url = `${this.apiUrl}?text=${text}&min_confidence=${min_confidence}&include=${includeString}&token=${localStorage.getItem("token")}`;
    this.historyService.setHistory(this.url);
    return this.httpClient.get<Extraction>(this.url);


  }

}
