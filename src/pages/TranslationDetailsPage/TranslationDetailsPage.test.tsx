import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { MemoryRouter } from 'react-router-dom';
import { TranslationDetailsPage } from './TranslationDetailsPage';
import React from 'react';

test('When rendering the details translation page, 16 paragraphs should be displayed', () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <TranslationDetailsPage />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>,
  );

  const infoElements = screen.getAllByRole('paragraph');
  expect(infoElements.length).toBe(16);
});
