import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function signup(credentials) {
  try {
    const response = await axios.post('/users/signup', credentials);
    return response;
  } catch (error) {
    return error;
  }
}

export async function login(credentials) {
  try {
    const response = await axios.post('/users/login', credentials);
    return response;
  } catch (error) {
    return error;
  }
}

export async function logout() {
  try {
    const response = await axios.post('/users/logout');
    return response;
  } catch (error) {
    return error;
  }
}

export async function currentFetch() {
  try {
    const response = await axios.get('/users/current');
    return response;
  } catch (error) {
    return error;
  }
}
