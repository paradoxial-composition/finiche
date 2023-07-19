import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ViewHistory from './ViewHistory';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

describe('ViewHistory Component', () => {
  it('should render correctly with no movies', () => {
    render(<ViewHistory />);

    expect(screen.getByText('Récemment consultés')).toBeInTheDocument();
    expect(screen.getByText('Retour')).toBeInTheDocument();
    expect(screen.queryByTestId('movie-card')).toBeNull();
  });

  it('should navigate to /searchResult when "Retour" button is clicked', () => {
    const mockNavigate = jest.fn();
    jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

    render(<ViewHistory />);

    const retourButton = screen.getByText('Retour');
    fireEvent.click(retourButton);

    expect(mockNavigate).toHaveBeenCalledWith('/searchResult');
  });

  it('should render MovieCards when movies are present', () => {
    const mockMovies = [
      { id: 1, Title: 'Movie 1' },
      { id: 2, Title: 'Movie 2' },
    ];

    jest.spyOn(window.sessionStorage.__proto__, 'getItem').mockReturnValueOnce(JSON.stringify(mockMovies));

    render(<ViewHistory />);
    const movieCards = screen.getAllByTestId('movie-card');
    expect(movieCards.length).toBe(mockMovies.length);
    expect(screen.getByText('Movie 1')).toBeInTheDocument();
    expect(screen.getByText('Movie 2')).toBeInTheDocument();
  });

  it('should render CardDetails when showDetails is true', async () => {
    const mockMovies = [
      { id: 1, Title: 'Movie 1' },
      { id: 2, Title: 'Movie 2' },
    ];

    jest.spyOn(window.sessionStorage.__proto__, 'getItem').mockReturnValueOnce(JSON.stringify(mockMovies));

    render(<ViewHistory />);
    const movieCard = screen.getAllByTestId('movie-card')[0];
    fireEvent.click(movieCard);

    await waitFor(() => {
        expect(screen.getByTestId('details-container')).toBeInTheDocument();
    });
  });
});
