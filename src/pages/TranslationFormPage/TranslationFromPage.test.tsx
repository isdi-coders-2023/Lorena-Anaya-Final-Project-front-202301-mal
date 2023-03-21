import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { TranslationFormPage } from './TranslationFormPage';

test.only('When rendering the translation page, a title should be displayed', () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <TranslationFormPage />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>,
  );

  const title = screen.getByText('Assign a new translation');
  expect(title).toBeInTheDocument();
});
