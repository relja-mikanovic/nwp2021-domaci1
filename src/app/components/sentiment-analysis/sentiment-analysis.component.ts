import { Component, OnInit } from '@angular/core';
import {SentimentService} from "../../services/sentiment.service";

@Component({
  selector: 'sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit{

  text: string = "";
  language: string = "auto";

  public type: string = "";
  public score: string = "";

  constructor(private sentimentService: SentimentService) {}

  ngOnInit(): void {
  }

  analyseSentiment(text: string, lang: string){
   console.log(lang);

    this.sentimentService.analyseSentiment(text, lang).subscribe((result: any) => {
      this.type = result.sentiment.type;
      this.score = result.sentiment.score;
    });
  }

}
