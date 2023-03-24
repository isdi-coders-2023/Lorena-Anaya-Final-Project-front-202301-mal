import { waitFor, screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';

import { server } from '../../../mocks/server';
import { renderWithProviders } from '../../../mocks/test-util';
import { translationResponseFulfilled } from '../../../mocks/translations-mock';
import { TranslationDetailsCard } from './TranslationDetailsCard';
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a translation details card', () => {
  test('When the user clicks on a translation details card and the translation does not exist, an error should appear', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <TranslationDetailsCard />
        </Provider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('404')).toBeInTheDocument();
    });
  });
  test('when the translation details card is loading it should show a loading message', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <TranslationDetailsCard />,
        </Provider>
      </MemoryRouter>,
    );

    const infoElement = screen.getByText('Loading your translation details...');
    expect(infoElement).toBeInTheDocument();
  });

  test('when the translation details card exists', async () => {
    translationResponseFulfilled.failed = false;
    renderWithProviders(
      <MemoryRouter>
        <TranslationDetailsCard />,
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('Booking ref.')).toBeInTheDocument();
    });
  });
});
