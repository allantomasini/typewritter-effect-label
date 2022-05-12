import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TypewritterEffectComponent } from './typewritter-effect/typewritter-effect.component';

@NgModule({
  declarations: [
    AppComponent,
    TypewritterEffectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
