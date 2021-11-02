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
  public score: number = 0;

  public colorStyle: string = "";

  constructor(private sentimentService: SentimentService) {}

  ngOnInit(): void {
  }

  analyseSentiment(text: string, lang: string){
   console.log(lang);

    this.sentimentService.analyseSentiment(text, lang).subscribe((result: any) => {
      this.type = result.sentiment.type;
      this.score = result.sentiment.score;

      let t = (result.sentiment.score + 1) / 2
      let r = Math.round(255 + (0 - 255)*t)
      let g = Math.round(0 + (255 - 0)*t)
      let b = 0
      this.colorStyle = "color:rgb(" + r + "," + g + ", " + b + ");";

    });


  }




}
