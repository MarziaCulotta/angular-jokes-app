import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokesComponent } from './core/components/jokes/jokes.component';
import { LikedJokesComponent } from './core/components/liked-jokes/liked-jokes.component';
import { DislikedJokesComponent } from './core/components/disliked-jokes/disliked-jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent,
    LikedJokesComponent,
    DislikedJokesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
