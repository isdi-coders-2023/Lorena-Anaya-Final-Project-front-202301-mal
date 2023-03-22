import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { TranslationCard } from './TranslationCard';

test('navigate to details page on button click', () => {
  const translation = {
    bookingRef: 'ABC123',
    dueDate: new Date('4'),
    status: 'Pending',
    translator: 'Pepe',
    languageFrom: 'esperanto',
    languageTo: 'chino',
    words: 223832,
    toTranslateDoc: 'url',
    translatedDoc: 'yrl2',
  };

  render(
    <MemoryRouter>
      <TranslationCard translation={translation} />
    </MemoryRouter>,
  );

  const detailsButton = screen.getByRole('button');
  fireEvent.click(detailsButton);

  expect(window.location.pathname).toBe('/');
});
