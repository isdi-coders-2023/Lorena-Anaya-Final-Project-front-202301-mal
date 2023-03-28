import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../app/store';
import { EnquiriesPage } from './EnquiriesPage';

test('When rendering the enquiries page, a title should be displayed', () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <EnquiriesPage />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>,
  );

  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});
