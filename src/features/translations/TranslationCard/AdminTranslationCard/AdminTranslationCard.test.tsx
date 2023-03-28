import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router-dom';
import { ErrorHandlers } from '../../../../mocks/handlers';

import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/test-util';

import { AdminTranslationCard } from './AdminTranslationCard';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a translation card component', () => {
  test('When the admin clicks the button to delete a translation he should be able to delete it', async () => {
    const adminTranslations = [
      {
        bookingRef: 'ABC123',
        dueDate: '3',
        status: 'Pending',
        translator: 'Pepe',
        languageFrom: 'esperanto',
        languageTo: 'chino',
        words: 223832,
        toTranslateDoc: 'url',
        translatedDoc: 'yrl2',
        _id: 'mockId1',
      },
    ];

    renderWithProviders(
      <MemoryRouter>
        <AdminTranslationCard translation={adminTranslations[0]} />
      </MemoryRouter>,
    );

    await userEvent.click(screen.getByTestId('end-button'));

    await waitFor(() => {
      expect(
        screen.queryByText(adminTranslations[0].bookingRef),
      ).not.toBeInTheDocument();
    });
  });

  test('When the admin clicks the button to delete a translation and there is an error', async () => {
    server.use(...ErrorHandlers);
    const translation2 = [
      {
        bookingRef: 'ABC123',
        dueDate: '3',
        status: 'Pending',
        translator: 'Pepe',
        languageFrom: 'esperanto',
        languageTo: 'chino',
        words: 223832,
        toTranslateDoc: 'url',
        translatedDoc: 'yrl2',
        _id: 'mockId2',
      },
    ];

    renderWithProviders(
      <MemoryRouter>
        <AdminTranslationCard translation={translation2[0]} />
      </MemoryRouter>,
    );

    await userEvent.click(screen.getByTestId('end-button'));

    expect(screen.getByText('Pending')).toBeInTheDocument();
  });
});
