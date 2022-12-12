import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MyLovePageComponent } from './my-love-page/my-love-page.component';
import { LoveInYouPageComponent } from './love-in-you-page/love-in-you-page.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { OurFutureComponent } from './our-future/our-future.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyLovePageComponent,
    LoveInYouPageComponent,
    BirthdayComponent,
    OurFutureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
