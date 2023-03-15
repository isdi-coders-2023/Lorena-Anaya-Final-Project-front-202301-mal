import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { store } from '../../app/store';

import { server } from '../../mocks/server';

import { RegisterForm } from './RegisterForm';
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a Form component', () => {
  test('When the component is rendered, it should show two text inputs', () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );
    const textboxElements = screen.getAllByRole('textbox');
    expect(textboxElements.length).toEqual(5);
  });

  test('When the component is rendered, it should show a submit button and call a function', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );
    const submitFn = jest.fn();
    const submitElement = screen.getByRole('button');
    userEvent.click(submitElement, submitFn());
    await waitFor(() => {
      expect(submitFn).toHaveBeenCalled();
    });
  });

  test('When the user press submit and the user is already registered then an error message should appear', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );
    const email = screen.getByLabelText('Email:');
    await userEvent.type(email, 'alreadyRegisteredEmail@test.com');
    const password = screen.getByLabelText('Password:');
    await userEvent.type(password, 'lorenapassword');
    const name = screen.getByLabelText('First name:');
    await userEvent.type(name, 'Diego');
    const lastName = screen.getByLabelText('Last name:');
    await userEvent.type(lastName, 'Power');
    const phone = screen.getByLabelText('Phone:');
    await userEvent.type(phone, '626967543');
    const languages = screen.getByLabelText('Languages:');
    await userEvent.type(languages, 'none');

    const submit = screen.getByRole('button');
    userEvent.click(submit);

    await waitFor(async () => {
      const message = screen.getByRole('paragraph');
      expect(message).toHaveTextContent(
        'Error, that user is already registered.',
      );
    });
  });

  test('When a user tries to register and there is an error it should show message as feedback', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );
    const email = screen.getByLabelText('Email:');
    await userEvent.type(email, 'anotherError@test.com');
    const password = screen.getByLabelText('Password:');
    await userEvent.type(password, 'invalid');
    const name = screen.getByLabelText('First name:');
    await userEvent.type(name, 'Diego');
    const lastName = screen.getByLabelText('Last name:');
    await userEvent.type(lastName, 'Power');
    const phone = screen.getByLabelText('Phone:');
    await userEvent.type(phone, 'invalid');
    const languages = screen.getByLabelText('Languages:');
    await userEvent.type(languages, 'none');

    await userEvent.click(screen.getByRole('button'));

    await waitFor(async () => {
      expect(
        screen.getByText('Error registering user. Please try again later.'),
      ).toBeInTheDocument();
    });
  });

  test('When the user press submit and everything went ok, a paragraph should appear indicating success', async () => {
    render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
    );

    const email = screen.getByLabelText('Email:');
    await userEvent.type(email, 'email@test.com');
    const password = screen.getByLabelText('Password:');
    await userEvent.type(password, 'lorenapassword');
    const name = screen.getByLabelText('First name:');
    await userEvent.type(name, 'Diego');
    const lastName = screen.getByLabelText('Last name:');
    await userEvent.type(lastName, 'Power');
    const phone = screen.getByLabelText('Phone:');
    await userEvent.type(phone, '626967543');
    const languages = screen.getByLabelText('Languages:');
    await userEvent.type(languages, 'none');

    const submit = screen.getByRole('button');

    userEvent.click(submit);

    await waitFor(async () => {
      const message = screen.getByRole('paragraph');
      expect(message).toHaveTextContent('Succesfully registered!');
    });
  });
});
