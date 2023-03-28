import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { AdminDashboardPage } from './AdminDashboardPage';

test('When rendering the dashboard page, a title should be displayed', () => {
  render(
    <MemoryRouter>
      <React.StrictMode>
        <Provider store={store}>
          <AdminDashboardPage />
        </Provider>
      </React.StrictMode>
    </MemoryRouter>,
  );

  const title = screen.getByText('Assigned Projects');
  expect(title).toBeInTheDocument();
});
