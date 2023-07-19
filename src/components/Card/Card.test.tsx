import React, { Dispatch, SetStateAction } from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

const mockMovie = {
  ['IMDB Rating']: 7.5,
  ['Title']: 'Test Movie',
  ['Major Genre']: 'Action',

  ["US Gross"]: 123123,
  ["Worldwide Gross"]: 123123,
  ["US DVD Sales"]: '',
  ["Production Budget"]: 123121,
  ["Release Date"]: '',
  ["MPAA Rating"]: '',
  ["Running Time min"]: 1231,
  ["Distributor"]: '',
  ["Source"]: '',
  ["Creative Type"]: '',
  ["Director"]: '',
  ["Rotten Tomatoes Rating"]: 1231,
  ["IMDB Votes"]: 1231,
  ["id"]: 1231
};

const setSelectedMovie : Dispatch<SetStateAction<{ id: number; }>> = jest.fn();
const setShowDetails: Dispatch<SetStateAction<boolean>> = jest.fn();

describe('Card Component', () => {
  it('renders movie title', () => {
    const { getByText } = render(<Card movie={mockMovie} setSelectedMovie={setSelectedMovie} setShowDetails={setShowDetails}/>);
    const titleElement = getByText('Test Movie');
    expect(titleElement).toBeInTheDocument();
  });

  it('renders movie genre', () => {
    const { getByText } = render(<Card movie={mockMovie} setSelectedMovie={setSelectedMovie} setShowDetails={setShowDetails}/>);
    const genreElement = getByText('Action');
    expect(genreElement).toBeInTheDocument();
  });

  it('renders movie IMDB rating', () => {
    const { getByText } = render(<Card movie={mockMovie} setSelectedMovie={setSelectedMovie} setShowDetails={setShowDetails}/>);
    const imdbRatingElement = getByText('7.5');
    expect(imdbRatingElement).toBeInTheDocument();
  });
});