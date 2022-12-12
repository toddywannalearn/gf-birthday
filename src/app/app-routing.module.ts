import { OurFutureComponent } from './our-future/our-future.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { LoveInYouPageComponent } from './love-in-you-page/love-in-you-page.component';
import { MyLovePageComponent } from './my-love-page/my-love-page.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'my-love', component: MyLovePageComponent, title: 'Meu amor por você'},
  {path: 'love-in-you', component: LoveInYouPageComponent, title: 'O que eu amo em você'},
  {path: 'birthday', component: BirthdayComponent, title: 'Parabéns'},
  {path: 'our-future', component: OurFutureComponent, title: 'Nosso futuro'},
  {path: '', component: HomeComponent, title: 'Parabéns Meu Amor'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
