import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Extraction} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class ExtractionService {

  private readonly apiUrl = environment.extractionApi;

  constructor(private httpClient: HttpClient) { }

  extractEntities(text: string, min_confidence: number, includeString: string): Observable<Extraction>{
    const url: string = `${this.apiUrl}?text=${text}&min_confidence=${min_confidence}&include=${includeString}&token=${localStorage.getItem("token")}`;
    return this.httpClient.get<Extraction>(url);


  }

}
