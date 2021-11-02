import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Sentiment} from "../../models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SentimentService {

  private readonly apiUrl = environment.sentimentApi;

  constructor(private httpClient: HttpClient) { }

  analyseSentiment(text: string, lang: string): Observable<Sentiment>{
    const url: string = `${this.apiUrl}?text=${text}&lang=${lang}&token=${localStorage.getItem("token")}`;
    return this.httpClient.get<Sentiment>(url);
  }

}
