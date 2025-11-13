import {configureStore} from '@reduxjs/toolkit';
import {reducer} from './reducer.ts';

export const store = configureStore({
  reducer
});

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
