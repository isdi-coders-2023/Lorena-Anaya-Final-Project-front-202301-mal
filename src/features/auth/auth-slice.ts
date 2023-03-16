import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { newUser } from '../../shared/models/user-model';
import { logUser, registerUser } from './auth-api';

export interface AuthResponse {
  msg: 'string';
  accessToken: 'string';
}

export interface RegisterUserState {
  status: 'idle' | 'loading' | 'failed';
  registerStatus: 'loading' | 'failed' | 'idle' | 'unused';
  responseMsg: string | undefined;
}

const initialState: RegisterUserState = {
  status: 'idle',
  registerStatus: 'unused',
  responseMsg: ' ',
};

export const sendUser = createAsyncThunk(
  'sendUser/registerUser',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    const apiResponse = await registerUser(user as newUser);
    const data: AuthResponse = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }
    return data;
  },
);

export const logUserAsync = createAsyncThunk(
  'logUser/logUserAsync',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    const apiResponse = await logUser(user as newUser);
    const data: AuthResponse = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }
    return data;
  },
);

export const authUserSlice = createSlice({
  name: 'authUserSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(sendUser.pending, state => {
        state.status = 'loading';
        state.registerStatus = 'loading';
      })
      .addCase(
        sendUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.status = 'idle';
          state.registerStatus = 'idle';
          state.responseMsg = action.payload.msg;
        },
      )
      .addCase(sendUser.rejected, (state, action) => {
        state.status = 'failed';
        state.registerStatus = 'failed';
        state.responseMsg = action.error.message;
      })
      .addCase(logUserAsync.pending, state => {
        state.status = 'loading';
        state.registerStatus = 'loading';
      })
      .addCase(
        logUserAsync.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.status = 'idle';
          state.registerStatus = 'idle';
          state.responseMsg = action.payload.msg;
          sessionStorage.setItem('Bearer', action.payload.accessToken);
        },
      )
      .addCase(logUserAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.registerStatus = 'failed';
        state.responseMsg = action.error.message;
      });
  },
});

export const selectStatus = (state: RootState) => state.authUserReducer.status;

export const selectRegisterStatus = (state: RootState) =>
  state.authUserReducer.registerStatus;

export const selectResponseMsg = (state: RootState) =>
  state.authUserReducer.responseMsg;

export default authUserSlice.reducer;
