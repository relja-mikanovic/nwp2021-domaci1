import { Component, OnInit } from '@angular/core';
import {DetectionService} from "../../services/detection.service";
import {SimilarityService} from "../../services/similarity.service";
import {HistoryService} from "../../services/history.service";

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{

  historyArray: string[] = [];

  constructor(private historyService: HistoryService) {}

  ngOnInit(): void {
   this.historyArray = this.historyService.getHistory();
  }



}
