import * as helpers from './helpers';
import movies from "./mocks/movies";
import { SESSION_TOKEN, VIWED_MOVIES } from './constans';

describe('saveTokenInSession', () => {
    it('should save the token in the session storage', () => {
        const sessionSetterSpy = jest.spyOn(window.sessionStorage.__proto__, 'setItem');
        helpers.saveTokenInSession('token');
    
        expect(sessionSetterSpy).toHaveBeenCalledWith(SESSION_TOKEN, 'token');
    });
});

describe('getTokenFromSession', () => {
    it('should save the token in the session storage', () => {
        const sessionGetterSpy = jest.spyOn(window.sessionStorage.__proto__, 'getItem').mockReturnValueOnce('token');
        const token = helpers.getTokenFromSession();
    
        expect(sessionGetterSpy).toHaveReturnedWith(token);
    });
});

describe('removeRokenFromSession', () => {
    it('should remove the token from the session storage', () => {
        const sessionRemoverSpy = jest.spyOn(window.sessionStorage.__proto__, 'removeItem');
        helpers.removeRokenFromSession();
    
        expect(sessionRemoverSpy).toHaveBeenCalledWith(SESSION_TOKEN);
    });
});

describe('handleErrorMessages', () => {
    it('should return correct message depending on code 500', () => {
        const message = helpers.handleErrorMessages(500);
    
        expect(message).toBe('Le serveur est pour le moment surchargé, veuillez réssayer plus tard.');
    });
    // it('should return correct message depending on code 429', () => {
    //     const message = helpers.handleErrorMessages(429);
    
    //     expect(message).toBe('Veuillez attendre au moins une minute entre deux recherche consecutive');
    // });
    it('should return correct message depending on code 0', () => {
        const message = helpers.handleErrorMessages(0);
    
        expect(message).toBe('Votre recherche ne retourne aucun resultat.');
    });
    it('should return empty string', () => {
        const message = helpers.handleErrorMessages(212);
    
        expect(message).toBe('');
    });
});

describe('saveViewedMoviesInStorage', () => {
    it('should save the movie in the session storage', () => {
        const sessionSetterSpy = jest.spyOn(window.sessionStorage.__proto__, 'setItem');
        helpers.saveViewedMoviesInStorage(movies[0]);
    
        expect(sessionSetterSpy).toHaveBeenCalledWith(VIWED_MOVIES, JSON.stringify(movies[0]));
    });
});

describe('getViewedMoviesFromStorage', () => {
    it('should get the movie from the session storage', () => {
        const sessionSetterSpy = jest.spyOn(window.sessionStorage.__proto__, 'getItem').mockReturnValueOnce(JSON.stringify(movies[0]));
        const response = helpers.getViewedMoviesFromStorage();
    
        expect(sessionSetterSpy).toHaveReturnedWith(JSON.stringify(movies[0]));
    });
});

describe('clearViewedMoviesInStorage', () => {
    it('should remove the movie from the session storage', () => {
        const sessionRemoverSpy = jest.spyOn(window.sessionStorage.__proto__, 'removeItem');
        helpers.clearViewedMoviesInStorage();
    
        expect(sessionRemoverSpy).toHaveBeenCalledWith(VIWED_MOVIES);
    });
})

describe('hasMovie', () => {
    it('should return true if movie is in array', () => {
        const hasmovie_ = helpers.hasMovie(movies, movies[0]);
        expect(hasmovie_).toBe(true);
    });
    it('should return false if movie is not in array', () => {
        const hasmovie_ = helpers.hasMovie(movies, {id: 123});
        expect(hasmovie_).toBe(false);
    });
});