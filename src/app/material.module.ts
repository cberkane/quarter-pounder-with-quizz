import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';



const materialElements = [
  DragDropModule,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatProgressBarModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    materialElements
  ]
})
export class MaterialModule { }
