import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import MoviesResult from './MoviesResult';
import * as api from '../../api/api';
import * as reactRouterDom from 'react-router-dom';
import * as helpers from '../../helpers';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => jest.fn(),
  }));

describe('MoviesResult component', () => {
  it('should render the component with correct elements', () => {

    render(<MoviesResult />);

    expect(screen.getByText('Finiche')).toBeInTheDocument();
    expect(screen.getByText('Quelle est votre choix pour ce soir ?')).toBeInTheDocument();
    expect(screen.getByText('Se déconnecter')).toBeInTheDocument();
    expect(screen.getByText('Récemment consultés')).toBeInTheDocument();
    expect(screen.getByTestId('search-bar')).toBeInTheDocument();
    expect(screen.getByTestId('sort-by-button')).toBeInTheDocument();
  });

  
  it('should call handleLogout when the "Se déconnecter" button is clicked', () => {
    const mockHandleLogout = jest.fn();

    render(<MoviesResult />);

    fireEvent.click(screen.getByText('Se déconnecter'));

    waitFor(() => {
        expect(mockHandleLogout).toHaveBeenCalled();
    });
  });

  it('should navigate to "/viewHistory" when the "Récemment consultés" button is clicked', () => {
    const navigateSpy = jest.spyOn(reactRouterDom, 'useNavigate');
    render(<MoviesResult />);

    waitFor(() => {
        fireEvent.click(screen.getByText('Récemment consultés'));
        expect(navigateSpy).toHaveBeenCalled();
    });
  });

  it('should call getAll movies function on mount', () => {
    const getAllMoviesSpy = jest.spyOn(api, 'getAllMovies').mockReturnValueOnce(Promise.resolve([{id: 123}]));
    const getTokenFromSessionSpy = jest.spyOn(helpers, 'getTokenFromSession').mockReturnValueOnce('token');
    render(<MoviesResult />);

    waitFor(() => {
        expect(getAllMoviesSpy).toHaveBeenCalled();
        expect(getTokenFromSessionSpy).toHaveBeenCalled();
        expect(getAllMoviesSpy).toReturnWith([{id: 123}]);
    })
  });

  it('should handleErrorMessages be called', () => {
    jest.spyOn(api, 'getAllMovies').mockReturnValueOnce(Promise.resolve({response: {status: 500}}));
    jest.spyOn(helpers, 'getTokenFromSession').mockReturnValueOnce('token');
    const handleErrorMessagesSpy = jest.spyOn(helpers, 'handleErrorMessages');
    render(<MoviesResult />);

    waitFor(() => {
      expect(handleErrorMessagesSpy).toHaveBeenCalled();
    })
  });

  it('should console log error when getall movies is rejected', () => {
    const consoleLogSpy = jest.spyOn(console, 'log');
    jest.spyOn(api, 'getAllMovies').mockReturnValueOnce(Promise.reject('Error'));
    jest.spyOn(helpers, 'getTokenFromSession').mockReturnValueOnce('token');
    render(<MoviesResult />);

    waitFor(() => {
      expect(consoleLogSpy).toBeCalledWith('Error while getting movies');
    })
  });

  it('should call getSearchResult when input values are updated', async () => {
    const getSearchResultSpy = jest.spyOn(api, 'getSearchResult').mockReturnValueOnce(Promise.resolve([{id: 123}]));
    render(<MoviesResult />);
    
    fireEvent.change(screen.getByTestId('search-bar'), { target: { value: 'Wolf' } });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    
    fireEvent.click(screen.getByTestId('search-button'));

    waitFor(() => {
        expect(getSearchResultSpy).toHaveBeenCalled();
    });
  });

  it('should set Error message when movie array is empty', async () => {
    jest.spyOn(api, 'getSearchResult').mockReturnValueOnce(Promise.resolve([]));
    const handleErrorMessagesSpy = jest.spyOn(helpers, 'handleErrorMessages');
    render(<MoviesResult />);
    
    fireEvent.change(screen.getByTestId('search-bar'), { target: { value: 'Wolf' } });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    
    fireEvent.click(screen.getByTestId('search-button'));

    waitFor(() => {
        expect(handleErrorMessagesSpy).toHaveBeenCalled();
    });
  });

  it('should set Error message when response is 500', async () => {
    jest.spyOn(api, 'getSearchResult').mockReturnValueOnce(Promise.resolve( {response: { status: 500 } } ));
    const handleErrorMessagesSpy = jest.spyOn(helpers, 'handleErrorMessages');
    render(<MoviesResult />);
    
    fireEvent.change(screen.getByTestId('search-bar'), { target: { value: 'Wolf' } });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    
    fireEvent.click(screen.getByTestId('search-button'));

    waitFor(() => {
      expect(handleErrorMessagesSpy).toHaveBeenCalled();
    })
  });

  it('should log error when promise is rejected', async () => {
    jest.spyOn(api, 'getSearchResult').mockReturnValueOnce(Promise.reject('Error'));
    const consoleSpy = jest.spyOn(console, 'log');
    render(<MoviesResult />);
    
    fireEvent.change(screen.getByTestId('search-bar'), { target: { value: 'Wolf' } });

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    
    fireEvent.click(screen.getByTestId('search-button'));

    waitFor(() => {
        expect(consoleSpy).toHaveBeenCalled();
    });
  });

});
