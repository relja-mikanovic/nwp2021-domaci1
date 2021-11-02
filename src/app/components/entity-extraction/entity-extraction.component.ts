import { Component, OnInit } from '@angular/core';
import {ExtractionService} from "../../services/extraction.service";

@Component({
  selector: 'entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})

export class EntityExtractionComponent implements OnInit{

  text: string = "";
  min_confidence: number = 60;

  includeI: boolean = false;
  includeC: boolean = false;
  includeA: boolean = false;

  includeString = "";

  constructor(private extractionService: ExtractionService) {}

  ngOnInit(): void {
  }

  extractEntities(text: string, min_confidence: number, includeI: boolean, includeC: boolean, includeA: boolean){
    console.log(text);
    console.log(min_confidence/100);

    if(includeI){
      this.includeString = this.includeString.concat("image,")
    }

    if(includeC){
      this.includeString = this.includeString.concat("categories,")
    }

    if(includeA){
      this.includeString = this.includeString.concat("abstract,")
    }

    console.log(this.includeString);

    this.extractionService.extractEntities(text, min_confidence/100, this.includeString).subscribe((result: any) => {
      this.includeString = "";
      //this.type = result.sentiment.type;
    //  this.score = result.sentiment.score;

    });
  }


}
