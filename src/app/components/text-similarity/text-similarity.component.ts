import { Component, OnInit } from '@angular/core';
import {SimilarityService} from "../../services/similarity.service";

@Component({
  selector: 'text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})

export class TextSimilarityComponent implements OnInit {

  public similarity: number = 0;

  text1: string = "";
  text2: string = "";

  constructor(private similarityService: SimilarityService) {}

  ngOnInit(): void {
  }

  checkSimilarity(text1: string, text2: string) {
    this.similarityService.checkSimilarity(text1, text2).subscribe((result: any) => {
      this.similarity = result.similarity;
    });
  }
}


