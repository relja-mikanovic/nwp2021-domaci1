import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Sentiment} from "../../models";
import {Observable} from "rxjs";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  private readonly apiUrl = environment.sentimentApi;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  url: string = "";

  analyseSentiment(text: string, lang: string): Observable<Sentiment>{
    this.url = `${this.apiUrl}?text=${text}&lang=${lang}&token=${localStorage.getItem("token")}`;
    this.historyService.setHistory(this.url);
    return this.httpClient.get<Sentiment>(this.url);
  }



}
