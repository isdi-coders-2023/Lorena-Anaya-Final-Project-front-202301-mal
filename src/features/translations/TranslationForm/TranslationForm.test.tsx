import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../../app/store';
import { server } from '../../../mocks/server';
import { TranslationForm } from './TranslationForm';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
describe('Given a Translation Form component', () => {
  test('When the component is rendered, it should a spinbutton', () => {
    render(
      <Provider store={store}>
        <TranslationForm />
      </Provider>,
    );
    const spinButton = screen.getByRole('spinbutton');
    expect(spinButton).toBeInTheDocument();
  });

  test('When the component is rendered, it should show a submit button and call a function', async () => {
    render(
      <Provider store={store}>
        <TranslationForm />
      </Provider>,
    );
    const submitFn = jest.fn();
    const submitElement = screen.getByRole('button');
    userEvent.click(submitElement, submitFn());
    await waitFor(() => {
      expect(submitFn).toHaveBeenCalled();
    });
  });

  test('When the user press submit and everything there is an error, a paragraph should appear indicating error', async () => {
    render(
      <Provider store={store}>
        <TranslationForm />
      </Provider>,
    );

    const dueDate = screen.getByLabelText('Due date:');
    await fireEvent.change(dueDate, '2022-12-31');

    const words = screen.getByLabelText('Number of words:');
    await fireEvent.change(words, '1000');

    const source = screen.getByLabelText('Source:');
    await userEvent.selectOptions(source, ['Spanish']);

    const target = screen.getByText('Target:');
    await fireEvent.change(target, ['English']);

    const toTranslateDoc = screen.getByLabelText('Upload translation');
    await userEvent.upload(
      toTranslateDoc,
      new File(['(⌐□_□)'], 'document.pdf', { type: 'application/pdf' }),
    );

    const translator = screen.getByLabelText('Translator:');
    await fireEvent.change(translator, ['Lorena']);

    const submit = screen.getByRole('button');

    userEvent.click(submit);

    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockRejectedValue({
        msg: 'The project couldn’t be created, please try again.',
      }),
    });

    await waitFor(async () => {
      const message = screen.getByRole('paragraph');
      expect(message).toHaveTextContent(
        'The project couldn’t be created, please try again.',
      );
    });
  });

  test('When the user press submit and everything went ok, a paragraph should appear indicating success', async () => {
    render(
      <Provider store={store}>
        <TranslationForm />
      </Provider>,
    );

    const dueDate = screen.getByLabelText('Due date:');
    await fireEvent.change(dueDate, '2022-12-31');

    const words = screen.getByLabelText('Number of words:');
    await fireEvent.change(words, '1000');

    const source = screen.getByLabelText('Source:');
    await userEvent.selectOptions(source, ['Spanish']);

    const target = screen.getByText('Target:');
    await fireEvent.change(target, ['English']);

    const toTranslateDoc = screen.getByLabelText('Upload translation');
    await userEvent.upload(
      toTranslateDoc,
      new File(['(⌐□_□)'], 'document.pdf', { type: 'application/pdf' }),
    );

    const translator = screen.getByLabelText('Translator:');
    await fireEvent.change(translator, ['Lorena']);

    const submit = screen.getByRole('button');

    userEvent.click(submit);

    globalThis.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue({
        msg: 'Translation succesfully created!',
      }),
    });

    await waitFor(async () => {
      const message = screen.getByRole('paragraph');
      expect(message).toHaveTextContent('Translation succesfully created!');
    });
  });
});
