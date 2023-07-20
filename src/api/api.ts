import axios from "axios";
import { userCredentials } from '../local';
import { getTokenFromSession } from '../helpers';

export const authenticate = (userCredentials: userCredentials) => {
    return axios.post(`http://localhost:3000/auth/login`, userCredentials)
      .then(res => res.data)
      .catch(error => error.response.data);
};

export const getAllMovies = () => {
  const token = getTokenFromSession();
    return axios.get(`http://localhost:3000/movies`, {
        headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.data)
      .catch(error => error);
};

export const getSearchResult = (searchValue = '', sortBy = '') => {
    const token = getTokenFromSession();
    return axios.get(`http://localhost:3000/movies?query=${searchValue}&sortBy=${sortBy}`, {
      headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => res.data)
    .catch(error => error);
}