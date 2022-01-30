import { Observable, of } from 'rxjs';
import { ScoresService } from './../../services/scores.service';
import { Question } from './../../types/question.type';
import { QuizzService } from './../../services/quizz.service';
import { Component, OnInit } from '@angular/core';
import { Score } from '../../types/score.type';

@Component({
  selector: 'app-quizz-game',
  templateUrl: './quizz-game.component.html',
  styleUrls: ['./quizz-game.component.scss']
})
export class QuizzGameComponent implements OnInit {

  /* FIELDS */
  public gameDuration: number;
  public gameInterval: any;
  public questions: Question[];
  public questionIds: number[];
  public currentQuestion: Question;
  public currentScore: number;
  public highScore$: Observable<Score>;

  public error: string;


  /* HOOKS & INIT */
  constructor(
    public quizzService: QuizzService,
    public scoresServices: ScoresService,
  ) { }

  ngOnInit(): void {
    this.init();
  }

  ngOnDestroy(): void {
    clearInterval(this.gameInterval);
  }

  public init(): void {
    this.currentScore = 0;
    this.highScore$ = this.scoresServices.getHighest();
    this.startTimer();
    this.getQuestions();
  }


  /* METHODS */
  public startTimer(): void {
    this.gameDuration = 60;

    this.gameInterval = setInterval(() => {
      this.gameDuration--;
      if(this.gameDuration === 0 || this.questionIds.length === 0) {
        const score: Score = {
          amount: this.currentScore,
          recordedAt: new Date(),
        }
        this.scoresServices.add(score)
        .subscribe({
          complete: () => this.quizzService.setPlayMode(false),
        })
        ;
      }
    }, 1000);
  }

  public getQuestions(): void {
    this.quizzService.getQuestions()
    .subscribe({
      error: () => this.error = 'Echec lors de la récupération des questions' ,
      next: (payload) => this.processQuestions(payload),
      complete: () => this.initCurrentQuestion(),
    });
  }

  public processQuestions(questions: Question[]): void {
    this.questions = questions;
    this.questionIds = questions.map(question => question.id);
  }

  public initCurrentQuestion() {
    try {
      this.currentQuestion = this.getRandomQuestion();
    } catch(error: any) {
      this.error = error.message;
    }
  }

  public getRandomQuestion(): Question {
    const index = Math.floor(Math.random() * this.questionIds.length); // get random question id
    const id = this.questionIds[index];
    this.questionIds.splice(index, 1);

    const question = this.questions.find(q => q.id === id); // get question by id
    if(question === undefined) {
      throw new Error("Erreur lors de la récupération de la question");
    }

    return question;
  }

  public handleAnswer(event: boolean) {
    this.currentQuestion = {} as Question;
    (event === false) ? this.currentScore -= 10 : this.currentScore += 10;
    this.initCurrentQuestion();
  }

}
