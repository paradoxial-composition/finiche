import React from 'react';
import { render, fireEvent, screen, act, waitFor } from '@testing-library/react';
import SortByButton from './SortByButton';

// jest.mock('../../constants', () => ({
//   ORDER_BY: {
//     Title: 'Title',
//     'Rotten Tomatoes Rating': 'Rotten Tomatoes Rating',
//     'IMDB Rating': 'IMDB Rating',
//     'IMDB Votes': 'IMDB Votes',
//   },
// }));

describe('SortByButton', () => {
  it('renders the button with the correct icon', () => {
    render(<SortByButton />);
    const buttonIcon = screen.getByTestId('sort-by-icon');
    expect(buttonIcon).toBeInTheDocument();
  });

  it('shows options when the button is clicked', async () => {
    render(<SortByButton />);
    const button = screen.getByTestId('sort-by-button');

    fireEvent.click(button);

    await waitFor(() => {
        const options = screen.getByTestId('sort-by-options');
        expect(options).toBeInTheDocument();
    })
  });

  it('hides options when an option is selected', async () => {
    render(<SortByButton />);
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
