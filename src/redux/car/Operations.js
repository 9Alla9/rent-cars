import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://654562005a0b4b04436dfdaa.mockapi.io/';

export const getAllCar = createAsyncThunk('car/getAll', async (_, thunkApi) => {
  try {
    const res = await axios.get('/car');
    return res.data;
  } catch (error) {
    thunkApi.rejectWithValue(error.message);
  }
});
