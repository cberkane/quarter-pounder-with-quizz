import { Question } from './../types/question.type';
import { Score } from './../types/score.type';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ScoresService {

  /* FILEDS */
  private scoreUrl = 'http://localhost:3000/scores';


  /* CONSTRUCTORS */
  constructor(
    private http: HttpClient
  ) { }


  /* METHODS */
  public add(score: Score): Observable<Score> {
    return this.http.post<Score>(this.scoreUrl, score);
  }

  public getHighest(): Observable<Score> {
    return this.http.get<Score[]>(`${this.scoreUrl}?_sort=amount&_order=desc&_limit=1`)
    .pipe(
      map(scores => scores[0])
    );
  }

  public getHighScores(limit: number): Observable<Score[]> {
    return this.http.get<Score[]>(`${this.scoreUrl}?_sort=amount&_order=desc&_limit=${limit}`);
  }

}
