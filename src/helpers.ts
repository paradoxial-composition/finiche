import { Movie } from "./local";
import { SESSION_TOKEN, VIWED_MOVIES } from './constans';

export const saveTokenInSession = ( token: string ) => {
    sessionStorage.setItem(SESSION_TOKEN, token);
};

export const getTokenFromSession = () => {
   return sessionStorage.getItem(SESSION_TOKEN);
};

export const removeRokenFromSession = () => {
   return sessionStorage.removeItem(SESSION_TOKEN);
};

export const handleErrorMessages = (code: number) => {
   switch(code) {
       case 500: return 'Le serveur est pour le moment surchargé, veuillez réssayer plus tard.';
      //  case 429: return 'Veuillez attendre au moins une minute entre deux recherche consecutive';
       default: return '';
   }
};

export const saveViewedMovieInStorage = (movie: Movie) => {
   sessionStorage.setItem(VIWED_MOVIES, JSON.stringify(movie));
};

export const getViewedMoviesFromStorage = () => {
   return JSON.parse(sessionStorage.getItem(VIWED_MOVIES) || '[]');
};

export const hasMovie = (movies: Array<Movie>, movie: Movie) => movies.some((item: Movie) => item.id === movie.id);
