import { Component, OnInit } from '@angular/core';
import {DetectionService} from "../../services/detection.service";

@Component({
  selector: 'language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})

export class LanguageDetectionComponent implements OnInit{

  text: string = "";
  clean: boolean = false;

  public detectedLangs: any[] = [];

  constructor(private detectionService: DetectionService) {}

  ngOnInit(): void {
  }

  detectLanguage(text: string, clean: boolean){
  console.log(clean);
    this.detectedLangs = [];

    this.detectionService.detectLanguage(text, clean).subscribe((result: any) => {
      const array = result.detectedLangs;

      array.forEach((lang: any) => {
        this.detectedLangs.push(lang);

      });


    });
  }

}
