import { QuizzService } from '../../services/quizz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz-main',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzMainComponent implements OnInit {

  constructor(
    public quizzService: QuizzService
  ) { }

  ngOnInit(): void {
    this.quizzService.setPlayMode(false);
  }

  public init() {
  }
}
