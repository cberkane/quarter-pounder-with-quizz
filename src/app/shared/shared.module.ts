import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeclomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    WeclomeComponent,
    NavbarComponent,
    ErrorComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ErrorComponent,
    NavbarComponent,
    NotFoundComponent,
  ]
})
export class SharedModule { }
