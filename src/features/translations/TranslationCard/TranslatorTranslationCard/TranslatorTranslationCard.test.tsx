import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { MemoryRouter } from 'react-router-dom';

import { server } from '../../../../mocks/server';
import { renderWithProviders } from '../../../../mocks/test-util';

import { TranslationCard } from './TranslatorTranslationCard';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a translation card component', () => {
  test('navigate to details page on button click', async () => {
    const translation = {
      bookingRef: 'ABC123',
      dueDate: '3',
      status: 'Pending',
      translator: 'Pepe',
      languageFrom: 'esperanto',
      languageTo: 'chino',
      words: 223832,
      toTranslateDoc: 'url',
      translatedDoc: 'yrl2',
      _id: 'mockId',
    };

    renderWithProviders(
      <MemoryRouter>
        <TranslationCard translation={translation} />
      </MemoryRouter>,
    );

    await userEvent.click(screen.getByRole('link'));

    expect(window.location.pathname).toEqual('/');
  });
});
