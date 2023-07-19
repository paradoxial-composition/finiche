import axios from "axios";
import { userCredentials } from '../local';

const token = 'd376b9e0-c4e1-49b9-9eef-113b8a1ca3a0';

export const authenticate = (userCredentials: userCredentials) => {
    return axios.post(`http://localhost:3000/auth/login`, userCredentials)
      .then(res => res.data)
      .catch(error => error.response.data);
};

export const getAllMovies = () => {
    return axios.get(`http://localhost:3000/movies`, {
        headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res)
      .catch(error => error);
};