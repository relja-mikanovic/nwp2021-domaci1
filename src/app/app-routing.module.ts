import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenConfigurationComponent } from './components/token-configuration/token-configuration.component';
import { EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
import {TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./components/language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";
import {HistoryComponent} from "./components/history/history.component";

const routes: Routes = [
  {
    path: "token",
    component: TokenConfigurationComponent
  },
  {
    path: "extraction",
    component: EntityExtractionComponent
  },
  {
    path: "similarity",
    component: TextSimilarityComponent
  },
  {
    path: "detection",
    component: LanguageDetectionComponent
  },
  {
    path: "sentiment",
    component: SentimentAnalysisComponent
  },
  {
    path: "history",
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
