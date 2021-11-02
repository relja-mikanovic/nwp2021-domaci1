import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenKey: string;

  constructor() {
    this.tokenKey = '';
  }

  setTokenKey(tokenKey: string): void {
    this.tokenKey = tokenKey;
   // localStorage.removeItem('token');
    localStorage.setItem('token', tokenKey);
  }

  getTokenKey(): string {
    return <string>localStorage.getItem("token");
  }

}
