import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypewriterEffectComponent } from './typewriter-effect/typewriter-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    TypewriterEffectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
