import { PreloadedState } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { AppStore, RootState, setupStore } from '../app/store';
import { Translation } from '../shared/models/translation-model';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const emptyTranslation: Translation = {
  bookingRef: 'T1',
  dueDate: '2023-02-01',
  languageFrom: 'SPANISH',
  languageTo: 'ENGLISH',
  words: 3223,
  status: 'Pending',
  toTranslateDoc: 'URL',
  translatedDoc: 'URL2',
  _id: 'HOLA',
};
export const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState = {
      authUserReducer: {
        status: 'idle',
        registerStatus: 'unused',
        responseMsg: ' ',
        loginStatus: 'unused',
        id: ' ',
      },
      translationsReducer: {
        status: 'idle',
        apiStatus: 'unused',
        responseMsg: ' ',
        translations: [],
        translation: emptyTranslation,
        uploadTranslationStatus: 'unused',
      },
      usersReducer: {
        users: [],
        status: 'idle',
      },
    },
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) => {
  const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
