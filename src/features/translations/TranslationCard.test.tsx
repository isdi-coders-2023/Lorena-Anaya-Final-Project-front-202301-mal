import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { TranslationCard } from './TranslationCard';

describe('Given a TranslationCard component', () => {
  test('When the component is rendered, it should show one details button', () => {
    render(
      <Provider store={store}>
        <TranslationCard />
      </Provider>,
    );
    const detailsButton = screen.getAllByRole('button');
    expect(detailsButton.length).toEqual(1);
  });
});
