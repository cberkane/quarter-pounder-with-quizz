import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizzMainComponent } from './components/quizz/quizz.component';
import { QuizzGameComponent } from './components/quizz-game/quizz-game.component';
import { QuizzScoresComponent } from './components/quizz-scores/quizz-scores.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizzGameQuestionComponent } from './components/quizz-game-item/quizz-game-item.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    QuizzMainComponent,
    QuizzGameComponent,
    QuizzScoresComponent,
    QuizzGameQuestionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [
    QuizzMainComponent
  ]
})
export class QuizzModule { }
