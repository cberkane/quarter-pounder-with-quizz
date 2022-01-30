import { QuizzService } from './../../services/quizz.service';
import { Observable } from 'rxjs';
import { ScoresService } from './../../services/scores.service';
import { Component, OnInit } from '@angular/core';
import { Score } from '../../types/score.type';

@Component({
  selector: 'app-quizz-scores',
  templateUrl: './quizz-scores.component.html',
  styleUrls: ['./quizz-scores.component.scss']
})
export class QuizzScoresComponent implements OnInit {

  public highScores$: Observable<Score[]>;

  constructor(
    public quizzService: QuizzService,
    public scoresService: ScoresService,
  ) { }

  ngOnInit(): void {
    this.highScores$ = this.scoresService.getHighScores(3);
  }

  public retry(): void {
    this.quizzService.setPlayMode(true);
  }

}
