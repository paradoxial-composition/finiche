import { userCredentials } from '../local';
import * as api from './api';
import axios from 'axios';

describe('authenticate', () => {
    it('should return token', async () => {
        jest.spyOn(axios, 'post').mockReturnValue(Promise.resolve({data: {token: 'FakeToken'}}));
        const credentials: userCredentials = { username: 'Canal-plus', password: 'Super-secret'};
        const response = await api.authenticate(credentials);

        expect(response).toEqual({token: 'FakeToken'});
    });

    it('should return error with wronge username', async () => {
        jest.spyOn(axios, 'post').mockReturnValue(Promise.reject({response: {data: 'error'}}));
        const credentials: userCredentials = { username: 'Canal-plus', password: 'Super-secret'};
        const response = await api.authenticate(credentials);
        
        expect(response).toEqual('error');
    });
});

describe('getAllMovies', () => {
    it('should return movies', async () => {
        jest.spyOn(axios, 'get').mockReturnValueOnce(Promise.resolve({data: [{id: 1}]}));
        const response = await api.getAllMovies();

        expect(response).toEqual([{id: 1}]);
    });

    it('should return error', async () => {
        jest.spyOn(axios, 'get').mockReturnValue(Promise.reject('error'));
        const response = await api.getAllMovies();
        
        expect(response).toEqual('error');
    });
});

describe('getSearchResult', () => {
    it('should return searched movies', async () => {
        jest.spyOn(axios, 'get').mockReturnValueOnce(Promise.resolve({data: [{id: 1}]}));
        const response = await api.getAllMovies();

        expect(response).toEqual([{id: 1}]);
    });

    it('should return error', async () => {
        jest.spyOn(axios, 'get').mockReturnValue(Promise.reject('error'));
        const response = await api.getSearchResult();
        
        expect(response).toEqual('error');
    });
});