import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Detection} from "../../models";

@Injectable({
  providedIn: 'root'
})
export class DetectionService {

  private readonly apiUrl = environment.detectionApi;

  constructor(private httpClient: HttpClient) { }

  detectLanguage(text: string, clean: boolean): Observable<Detection>{
    const url: string = `${this.apiUrl}?text=${text}&token=${localStorage.getItem("token")}&clean=${clean}`;
    return this.httpClient.get<Detection>(url);
  }


}
