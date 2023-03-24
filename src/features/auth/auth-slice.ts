import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { newUser } from '../../shared/models/user-model';
import { logUser, registerUser } from './auth-api';

export interface RegisterResponse {
  msg: 'string';
}

export interface LoginResponse {
  msg: 'string';
  accessToken: 'string';
  id: 'string';
}

export interface AuthUserState {
  status: 'idle' | 'loading' | 'failed';
  registerStatus: 'loading' | 'failed' | 'idle' | 'unused';
  responseMsg: string | undefined;
  loginStatus: 'loading' | 'failed' | 'idle' | 'unused';
  id: string;
}

const initialState: AuthUserState = {
  status: 'idle',
  registerStatus: 'unused',
  loginStatus: 'unused',
  responseMsg: ' ',
  id: '',
};

export const sendUser = createAsyncThunk(
  'sendUser/registerUser',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    const apiResponse = await registerUser(user as newUser);
    const data: RegisterResponse = await apiResponse.json();
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
    const data: LoginResponse = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }
    return data;
  },
);

export const authUserSlice = createSlice({
  name: 'authUserSlice',
  initialState,
  reducers: {
    logoutUser: state => {
      state.status = 'idle';
      state.registerStatus = 'unused';
      state.loginStatus = 'unused';
      state.responseMsg = ' ';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(sendUser.pending, state => {
        state.status = 'loading';
        state.registerStatus = 'loading';
      })
      .addCase(
        sendUser.fulfilled,
        (state, action: PayloadAction<RegisterResponse>) => {
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
        state.loginStatus = 'loading';
      })
      .addCase(
        logUserAsync.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.status = 'idle';
          state.loginStatus = 'idle';
          sessionStorage.setItem('Bearer', action.payload.accessToken);
          sessionStorage.setItem('Id', action.payload.id);
          state.id = action.payload.id;
        },
      )
      .addCase(logUserAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.loginStatus = 'failed';
        state.responseMsg = action.error.message;
      });
  },
});

export const selectStatus = (state: RootState) => state.authUserReducer.status;

export const selectRegisterStatus = (state: RootState) =>
  state.authUserReducer.registerStatus;

export const selectLoginStatus = (state: RootState) =>
  state.authUserReducer.loginStatus;

export const selectResponseMsg = (state: RootState) =>
  state.authUserReducer.responseMsg;

export const selectResponseId = (state: RootState) => state.authUserReducer.id;

export const { logoutUser } = authUserSlice.actions;

export default authUserSlice.reducer;
