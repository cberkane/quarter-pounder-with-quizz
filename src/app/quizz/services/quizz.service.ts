import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Question } from '../types/question.type';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  /* FILEDS */
  private questionsUrl = 'http://localhost:3000/questions';

  private playModeSubject = new BehaviorSubject<boolean>(false);
  public playMode$ = this.playModeSubject.asObservable();



  /* HOOKS */
  constructor(
    public http: HttpClient
  ) { }


  /* METHODS */
  public setPlayMode(playMode: boolean) {
    this.playModeSubject.next(playMode);
  }

  public getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionsUrl);
  }
}
