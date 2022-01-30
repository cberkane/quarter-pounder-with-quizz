import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AppComponent } from './app.component';
import { QuizzMainComponent } from './quizz/components/quizz/quizz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', component: AppComponent, pathMatch: 'full'},
  { path:'play', component: QuizzMainComponent},
  { path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
