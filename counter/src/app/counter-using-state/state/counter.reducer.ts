import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from './counter.action';
import { InitialState } from './counter.state';

export const counterReducer = createReducer(
  InitialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement, (state) => {
    return {
      ...state,
      counter: state.counter - 1,
    };
  }),
  on(reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);
