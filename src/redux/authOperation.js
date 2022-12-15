import { createAsyncThunk } from '@reduxjs/toolkit';
import { signup, login, logout, currentFetch } from 'API/fetchAuth';
import axios from 'axios';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await signup(credentials);
      token.set(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await login(credentials);
      token.set(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const { data } = await logout();
    token.unset();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const currentUser = createAsyncThunk(
  'auth/current',
  async (_, { getState, rejectWithValue }) => {
    if (getState().auth.token === null) {
      return rejectWithValue();
    }

    token.set(getState().auth.token);

    try {
      const { data } = await currentFetch();
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
