import { screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import { TranslationDetailsPage } from './TranslationDetailsPage';
import React from 'react';
import { renderWithProviders } from '../../mocks/test-util';

test('When rendering the details translation page, a heading should be displayed', () => {
  renderWithProviders(
    <MemoryRouter>
      <React.StrictMode>
        <TranslationDetailsPage />
      </React.StrictMode>
    </MemoryRouter>,
  );

  const heading = screen.getAllByRole('heading');
  expect(heading.length).toBe(1);
});
