import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import { DashboardPage } from './DashboardPage';

test('When rendering the dashboard page, a title should be displayed', () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <DashboardPage />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>,
  );

  const title = screen.getByText('Assigned Projects');
  expect(title).toBeInTheDocument();
});
