import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

const setSearchValue = jest.fn();

describe('SearchBar component', () => {
  test('renders the component correctly', () => {
    render(<SearchBar setSearchValue={setSearchValue} isLoading={false}/>);

    const inputElement = screen.getByPlaceholderText('Recherche ..');
    const buttonElement = screen.getByRole('button', { name: 'search' });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  test('handles user input correctly', () => {
    render(<SearchBar setSearchValue={setSearchValue} isLoading={false}/>);

    const inputElement = screen.getByPlaceholderText('Recherche ..');

    fireEvent.change(inputElement, { target: { value: 'test query' } });

    expect((inputElement as HTMLInputElement).value).toBe('test query');
  });
});
