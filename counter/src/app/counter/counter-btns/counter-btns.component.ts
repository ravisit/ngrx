import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter-btns',
  templateUrl: './counter-btns.component.html',
  styleUrls: ['./counter-btns.component.scss'],
})
export class CounterBtnsComponent {
  @Output() increase = new EventEmitter<void>();
  @Output() decrease = new EventEmitter<void>();
  @Output() rset = new EventEmitter<void>();
  increment() {
    this.increase.emit();
  }
  decrement() {
    this.decrease.emit();
  }
  reset() {
    this.rset.emit();
  }
}
