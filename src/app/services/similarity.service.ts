import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Similarity} from "../../models";
import {HistoryService} from "./history.service";

@Injectable({
  providedIn: 'root'
})
export class SimilarityService {

  private readonly apiUrl = environment.similarityApi;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }
  url: string = "";


  checkSimilarity(text1: string, text2: string): Observable<Similarity>{
    this.url = `${this.apiUrl}?text1=${text1}&text2=${text2}&token=${localStorage.getItem("token")}`;
    this.historyService.setHistory(this.url);
    return this.httpClient.get<Similarity>(this.url);
  }



}
