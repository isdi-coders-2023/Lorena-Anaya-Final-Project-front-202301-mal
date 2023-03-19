import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authUserReducer from '../features/auth/auth-slice';
import translationsReducer from '../features/translations/translations-slice';

export const store = configureStore({
  reducer: {
    authUserReducer: authUserReducer,
    translationsReducer: translationsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
