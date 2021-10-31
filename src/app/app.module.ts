import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { TokenConfigurationComponent } from './components/token-configuration/token-configuration.component';
import { EntityExtractionComponent } from "./components/entity-extraction/entity-extraction.component";
import { TextSimilarityComponent} from "./components/text-similarity/text-similarity.component";
import { LanguageDetectionComponent } from "./components/language-detection/language-detection.component";
import { SentimentAnalysisComponent} from "./components/sentiment-analysis/sentiment-analysis.component";

@NgModule({
  declarations: [
    AppComponent,
    TokenConfigurationComponent,
    EntityExtractionComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
