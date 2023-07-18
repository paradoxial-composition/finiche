import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

jest.mock('./AppRouter', () => () => <div data-testid="app-router-mock"></div>);

describe('App Component', () => {
  it('renders the AppRouter component', () => {
    const { getByTestId } = render(<App />);
    const appRouterElement = getByTestId('app-router-mock');
    expect(appRouterElement).toBeInTheDocument();
  });

  it('has the correct background color', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveStyle('background-color: rgb(14 14 14 / var(--tw-bg-opacity))');
  });

  it('has the correct text color', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toHaveStyle('color: rgb(247 255 255 / var(--tw-text-opacity));');
  });
});