import { Question } from '../../types/question.type';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CdkDragEnd, CdkDragMove, CdkDrag } from '@angular/cdk/drag-drop';



@Component({
  selector: 'app-quizz-game-item',
  templateUrl: './quizz-game-item.component.html',
  styleUrls: ['./quizz-game-item.component.scss']
})
export class QuizzGameQuestionComponent implements OnInit {

  /* FIELDS */
  @Input() public question: Question;
  @Output() private onAnswer = new EventEmitter<boolean>();
  @ViewChild('imageRef') public imageRef: ElementRef;
  public isGoodAnswer: boolean;
  public displayAnswer: boolean;
  public dragPositionX: number;
  public opacity: number;


  /* HOOKS AND INIT */
  constructor() { }

  ngOnInit(): void {
    this.opacity = 1;
  }

  ngOnDestroy(): void {
  }


  /* METHODS */
  public answerQuestion(answer: boolean): void {
    this.isGoodAnswer = (answer === this.question.answer);
    this.displayAnswer = true;

    setTimeout(() => {
      this.onAnswer.emit(this.isGoodAnswer);
      this.displayAnswer = false;
    }, 500);
  }


  public onDragEnd(event: CdkDragEnd): void {
    if(this.dragPositionX > 200) {
      this.answerQuestion(true);
    }
    if(this.dragPositionX < -200) {
      this.answerQuestion(false);
    }
    event.source._dragRef.reset();
    this.imageRef.nativeElement.style.opacity = 1;
    this.dragPositionX = 0;
  }

  public onDragMove(event: CdkDragMove): void {
    this.dragPositionX = event.distance.x;
    const min = -200;
    const max = 200;

    let opacity
    if(this.dragPositionX < 0 && this.dragPositionX > min) {
      opacity = ((this.dragPositionX/max) * -1);
      this.imageRef.nativeElement.style.opacity = 1 - opacity;
    } else {
      opacity = (this.dragPositionX/max);
      this.imageRef.nativeElement.style.opacity = 1 - opacity;
    }


    if(opacity > 1 || opacity < -1) {
      event.source._dragRef.reset();
      this.imageRef.nativeElement.style.opacity = 1;
    }
  }
}
