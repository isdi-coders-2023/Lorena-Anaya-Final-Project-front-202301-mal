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

  test('When the user logs in and the translation list is renderes succesfully; if the translation status is pending then it should render a tag with the text pending', async () => {
    translationsResponseFulfilled.failed = false;
    translationsResponseFulfilled.translations = [
      {
        _id: '6413680f586fb0d357277c93',
        bookingRef: 'T1',
        dueDate: '2023-04-03T22:00:00.000Z',
        languageFrom: 'English',
        languageTo: 'Spanish',
        words: 456,
        status: 'Pending',
        toTranslateDoc: 'url',
        translatedDoc: 'url',
      },
    ];
    render(
      <Provider store={store}>
        <TranslationsList />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Pending')).toBeInTheDocument();
    });
  });

  test('When the user logs in and the translation list is renderes succesfully; if the translation status is completed then it should render a tag with the text completed', async () => {
    translationsResponseFulfilled.failed = false;
    translationsResponseFulfilled.translations = [
      {
        _id: '6413680f586fb0d357277c93',
        bookingRef: 'T1',
        dueDate: '2023-04-03T22:00:00.000Z',
        languageFrom: 'English',
        languageTo: 'Spanish',
        words: 456,
        status: 'Completed',
        toTranslateDoc: 'url',
        translatedDoc: 'url',
      },
    ];
    render(
      <Provider store={store}>
        <TranslationsList />
      </Provider>,
    );

    await waitFor(() => {
      expect(screen.getByText('Completed')).toBeInTheDocument();
    });
  });
});
