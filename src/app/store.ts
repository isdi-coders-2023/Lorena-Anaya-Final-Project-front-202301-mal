import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  PreloadedState,
} from '@reduxjs/toolkit';
import authUserReducer from '../features/auth/auth-slice';
import translationsReducer from '../features/translations/translations-slice';
import usersReducer from '../features/users/users-slice';

export const store = configureStore({
  reducer: {
    authUserReducer: authUserReducer,
    translationsReducer: translationsReducer,
    usersReducer: usersReducer,
  },
});
const rootReducer = combineReducers({
  translationsReducer: translationsReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
