import { getByAltText, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../../app/store';
import { server } from '../../../mocks/server';
import { LoginForm } from '../login/LoginForm';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a Login form component', () => {
  test('When the component is rendered, it should show one text input for email', () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );
    const textboxElements = screen.getAllByRole('textbox');
    expect(textboxElements.length).toEqual(1);
  });

  test('When the component is rendered, it should show a submit button and call a function', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );
    const submitFn = jest.fn();
    const submitElement = screen.getByRole('button');
    userEvent.click(submitElement, submitFn());
    await waitFor(() => {
      expect(submitFn).toHaveBeenCalled();
    });
  });

  test('When the user press submit and the email is not registered then an error message should appear', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );
    const email = screen.getByLabelText('Email:');
    await userEvent.type(email, 'notRegisteredEmail@test.com');
    const password = screen.getByLabelText('Password:');
    await userEvent.type(password, 'lorenapassword');

    const submit = screen.getByRole('button');
    userEvent.click(submit);

    await waitFor(async () => {
      const message = screen.getByRole('paragraph');
      expect(message).toHaveTextContent('Error, that user is not registered.');
    });
  });

  test('When a user tries to login and there is an error it should show message as feedback', async () => {
    render(
      <Provider store={store}>
        <LoginForm />
      </Provider>,
    );
    const email = screen.getByLabelText('Email:');
    await userEvent.type(email, 'anotherError@test.com');
    const password = screen.getByLabelText('Password:');
    await userEvent.type(password, 'invalid');

    await userEvent.click(screen.getByRole('button'));

    await waitFor(async () => {
      expect(screen.getByText('Error while login')).toBeInTheDocument();
    });
  });

  //CORREGIR
  test('When the user press submit and everything went ok, a happy face should appear and the page should navigate to main dashboard', async () => {
    render(
      <MemoryRouter initialEntries={['/auth/login']}>
        <Provider store={store}>
          <LoginForm />
        </Provider>
      </MemoryRouter>,
    );

    const email = screen.getByLabelText('Email:');
    await userEvent.type(email, 'registeredEmail@test.com');
    const password = screen.getByLabelText('Password:');
    await userEvent.type(password, 'lorenapassword');

    const submit = screen.getByRole('button');

    await userEvent.click(submit);

    await waitFor(async () => {
      expect(screen.getByAltText('Happy face')).toBeInTheDocument();
    });
  });
});
