import React from 'react';
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react';
import SortByButton from './SortByButton';

const setSortValue = jest.fn();

describe('SortByButton', () => {
  it('renders the button with the correct icon', () => {
    render(<SortByButton setSortValue={setSortValue} isLoading={false}/>);
    const buttonIcon = screen.getByTestId('sort-by-icon');
    expect(buttonIcon).toBeInTheDocument();
  });

  it('shows options when the button is clicked', async () => {
    render(<SortByButton setSortValue={setSortValue} isLoading={false}/>);
    const button = screen.getByTestId('sort-by-button');

    fireEvent.click(button);

    await waitFor(() => {
        const options = screen.getByTestId('sort-by-options');
        expect(options).toBeInTheDocument();
    })
  });

  it('hides options when an option is selected', async () => {
    render(<SortByButton setSortValue={setSortValue} isLoading={false}/>);
    const button = screen.getByTestId('sort-by-button');

    fireEvent.click(button);

    await waitFor(() => {
        const option = screen.getByText('par Titre');
        fireEvent.click(option);
        const options = screen.queryByTestId('sort-by-options');
        expect(options).not.toBeInTheDocument();
    });
  });
});
