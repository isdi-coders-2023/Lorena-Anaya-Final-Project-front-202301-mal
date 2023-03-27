import { waitFor, screen, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../../app/store';
import { server } from '../../../../mocks/server';
import { adminTranslationsResponseFulfilled } from '../../../../mocks/translations-mock';

import AdminTranslationsList from './AdminTranslationsList';
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Given a translations card list component', () => {
  test('When the admin logs in and the page is loaded, it should show a list of the users translations cards', async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AdminTranslationsList />
        </Provider>
      </MemoryRouter>,
    );
    await waitFor(() => {
      expect(screen.getAllByRole('listitem').length).toBe(2);
    });
  });

  test('When the user logs in and the page is loaded, but he has not assigned any translationscyet, a message should give feedback', async () => {
    adminTranslationsResponseFulfilled.adminTranslations = [];

    render(
      <MemoryRouter>
        <Provider store={store}>
          <AdminTranslationsList />
        </Provider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(
        screen.getByText('You haven’t assigned a translation yet.'),
      ).toBeInTheDocument();
    });
  });

  test('When the user logs in but the api call fails, a message should give feedback', async () => {
    adminTranslationsResponseFulfilled.failed = true;
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AdminTranslationsList />
        </Provider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('Oopss!')).toBeInTheDocument();
    });
  });

  test('When the user logs in and the translation list is renderes succesfully; if the translation status is pending then it should render a tag with the text pending', async () => {
    adminTranslationsResponseFulfilled.failed = false;
    adminTranslationsResponseFulfilled.adminTranslations = [
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
      <MemoryRouter>
        <Provider store={store}>
          <AdminTranslationsList />
        </Provider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('Pending')).toBeInTheDocument();
    });
  });

  test('When the user logs in and the translation list is renderes succesfully; if the translation status is completed then it should render a tag with the text completed', async () => {
    adminTranslationsResponseFulfilled.failed = false;
    adminTranslationsResponseFulfilled.adminTranslations = [
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
      <MemoryRouter>
        <Provider store={store}>
          <AdminTranslationsList />
        </Provider>
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText('Completed')).toBeInTheDocument();
    });
  });
});
