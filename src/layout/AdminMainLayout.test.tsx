import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from '../app/store';
import { renderWithProviders } from '../mocks/test-util';
import AdminMainLayout from './AdminMainLayout';
test('When rendering AdminMainLayout, then the footer should be rendered too', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <AdminMainLayout />
      </Provider>
    </BrowserRouter>,
  );

  const mobileInfo = screen.getByText('+34 951196122');

  expect(mobileInfo).toBeInTheDocument();
});

test('When the user tries to log out, then he should not have an accessToken key on his sessionStorage', async () => {
  renderWithProviders(
    <BrowserRouter>
      <Provider store={store}>
        <AdminMainLayout />
      </Provider>
    </BrowserRouter>,
  );
  await fireEvent.click(screen.getByTestId('logout-btn'));
  expect(sessionStorage.getItem('accessToken')).toBe(null);
});
