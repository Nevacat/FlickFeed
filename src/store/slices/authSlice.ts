import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/axios';

interface StateType {
  isAuthenticated: 'PENDING' | 'SUCCESS' | 'FAILED';
}

export const verify = createAsyncThunk('auth/verify', async () => {
  const response = await axiosInstance.post('auth/me');
  return response.data;
});

const initialState: StateType = { isAuthenticated: 'PENDING' };
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [verify.pending.type]: (state: StateType) => {
      state.isAuthenticated = 'PENDING';
    },
    [verify.fulfilled.type]: (state: StateType) => {
      state.isAuthenticated = 'SUCCESS';
    },
    [verify.rejected.type]: (state: StateType) => {
      state.isAuthenticated = 'FAILED';
    },
  },
});

export default authSlice.reducer;
