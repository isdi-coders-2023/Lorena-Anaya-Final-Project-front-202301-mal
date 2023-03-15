import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import registerUserReducer from '../features/register/register-slice';
export const store = configureStore({
  reducer: { registerUserReducer: registerUserReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
