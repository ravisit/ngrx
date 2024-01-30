import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterBtnsComponent } from './counter/counter-btns/counter-btns.component';
import { CounterUsingStateComponent } from './counter-using-state/counter-using-state.component';
import { CounterResultComponent } from './counter-using-state/counter-result/counter-result.component';
import { CounterButtonsComponent } from './counter-using-state/counter-buttons/counter-buttons.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter-using-state/state/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterBtnsComponent,
    CounterUsingStateComponent,
    CounterResultComponent,
    CounterButtonsComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({ counter: counterReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
