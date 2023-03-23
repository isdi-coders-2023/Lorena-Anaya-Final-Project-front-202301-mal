import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { store } from '../../../app/store';
import { ServerErrorPage } from './ServerError';

test('When rendering the not found page, a title and subtitle should be displayed', () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <ServerErrorPage />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>,
  );

  const headings = screen.getAllByRole('heading');
  expect(headings.length).toBe(2);
});
