import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter-result',
  templateUrl: './counter-result.component.html',
  styleUrls: ['./counter-result.component.scss'],
})
export class CounterResultComponent implements OnInit {
  counter$!: Observable<{ counter: number }>;

  constructor(private store: Store<{ counter: { counter: number } }>) {
    this.counter$ = this.store.select('counter');
  }

  ngOnInit(): void {}
}
