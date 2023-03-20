import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './NavBar';
describe('Given a nav bar component', () => {
  test('When rendering, projects link should be in the document', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );

    const projectsLink = screen.getByText('Projects');

    expect(projectsLink).toBeInTheDocument();
  });
});
