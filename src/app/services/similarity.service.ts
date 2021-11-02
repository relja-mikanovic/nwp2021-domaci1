import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Similarity} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class SimilarityService {

  private readonly apiUrl = environment.similarityApi;

  constructor(private httpClient: HttpClient) { }

  // token mozda i iz servisa da dovucem

  checkSimilarity(text1: string, text2: string): Observable<Similarity>{
    const url: string = `${this.apiUrl}?text1=${text1}&text2=${text2}&token=${localStorage.getItem("token")}`;

    return this.httpClient.get<Similarity>(url);
  }

}
