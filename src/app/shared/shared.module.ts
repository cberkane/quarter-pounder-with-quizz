import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeclomeComponent } from './components/welcome/welcome.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material.module';
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { PlayGamesComponent } from './illustrations/play-games/play-games.component';



@NgModule({
  declarations: [
    WeclomeComponent,
    NavbarComponent,
    ErrorComponent,
    NotFoundComponent,
    HomeComponent,
    PlayGamesComponent,
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
