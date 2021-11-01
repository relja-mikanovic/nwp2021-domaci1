import { Component, OnInit } from '@angular/core';
import {TokenService} from "../../services/token-service.service";

@Component({
  selector: 'token-configuration',
  templateUrl: './token-configuration.component.html',
  styleUrls: ['./token-configuration.component.css']
})
export class TokenConfigurationComponent implements OnInit {

  tokenKey: string;

  constructor(private tokenService: TokenService) {
    this.tokenKey = this.tokenService.getTokenKey();
  }

  ngOnInit(): void {
  }

  setTokenKey() {
    this.tokenService.setTokenKey(this.tokenKey);
  }

  getTokenKey() {
    return this.tokenService.getTokenKey();

  }
}
