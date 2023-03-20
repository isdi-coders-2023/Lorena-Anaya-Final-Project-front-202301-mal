import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './MainLayout';
test('When rendering mainlayout, then the footer should be rendered too', () => {
  render(
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>,
  );

  const mobileInfo = screen.getByText('+34 951196122');

  expect(mobileInfo).toBeInTheDocument();
});
