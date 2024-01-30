import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterUsingStateComponent } from './counter-using-state.component';

describe('CounterUsingStateComponent', () => {
  let component: CounterUsingStateComponent;
  let fixture: ComponentFixture<CounterUsingStateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterUsingStateComponent]
    });
    fixture = TestBed.createComponent(CounterUsingStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
