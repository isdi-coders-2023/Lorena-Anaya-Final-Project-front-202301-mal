import { waitFor, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  test('when the translation details card exists and the user uploads a file but there is an error, it should appear a message indicating it', async () => {
    translationResponseFulfilled.failed = false;
    renderWithProviders(
      <MemoryRouter>
        <TranslationDetailsCard />,
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('Booking ref.')).toBeInTheDocument();
    });
    const submit = screen.getByRole('button');

    await userEvent.click(submit);

    await waitFor(async () => {
      expect(
        screen.getByText(
          'The translation couldn’t be uploaded, please try again.',
        ),
      ).toBeInTheDocument();
    });
  });

  test('When the user press upload and everything went ok, a message should indicate it', async () => {
    translationResponseFulfilled.failed = false;
    renderWithProviders(
      <MemoryRouter>
        <TranslationDetailsCard />,
      </MemoryRouter>,
    );

    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        msg: 'Translation succesfully uplouded!',
      }),
    });
    await waitFor(async () => {
      const translatedDoc = screen.getByLabelText('Click to choose a file');

      await userEvent.upload(
        translatedDoc,
        new File(['(⌐□_□)'], 'document.pdf', { type: 'application/pdf' }),
      );
      const submit = screen.getByRole('button');
      await userEvent.click(submit);
    });

    await waitFor(async () => {
      expect(
        screen.getByText('Translation succesfully uploaded!'),
      ).toBeInTheDocument();
    });
  });
});
