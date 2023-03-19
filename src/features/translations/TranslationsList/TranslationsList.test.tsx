import { waitFor, screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { server } from '../../../mocks/server';
import { translationsResponseFulfilled } from '../../../mocks/translations-mock';
import TranslationsList from './TranslationsList';

describe('Given a translations card list component', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test('When the user logs in and the page is loaded, it should show a list of the users translations cards', async () => {
    render(
      <Provider store={store}>
        <TranslationsList />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getAllByRole('listitem').length).toBe(2);
    });
  });

  test('When the user logs in and the page is loaded, but he does not have any translations assigned, a message should give feedback', async () => {
    translationsResponseFulfilled.translations = [];

    render(
      <Provider store={store}>
        <TranslationsList />
      </Provider>,
    );

    await waitFor(() => {
      expect(
        screen.getByText("You don't have any assigned translations yet."),
      ).toBeInTheDocument();
    });
  });

  test('When the user logs in but the api call fails, a message should give feedback', async () => {
    translationsResponseFulfilled.failed = true;
    render(
      <Provider store={store}>
        <TranslationsList />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('FALLO DEL SERVIDOR')).toBeInTheDocument();
    });
  });
});
