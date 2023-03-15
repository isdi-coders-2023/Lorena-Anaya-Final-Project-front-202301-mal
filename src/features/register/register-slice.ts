import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

import { newUser } from '../../shared/models/user-model';
import { registerUser } from './register-api';

export interface RegisterUserState {
  status: 'idle' | 'loading' | 'failed';
  registerStatus: 'idle' | 'success' | 'error409' | 'error';
}

const initialState: RegisterUserState = {
  status: 'idle',
  registerStatus: 'idle',
};

export const sendUser = createAsyncThunk(
  'sendUser/registerUser',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());
    const apiResponse = await registerUser(user as newUser);

    switch (apiResponse.status) {
      case 201:
        return 'success';
      case 409:
        return 'error409';
      case 400:
        return 'error';
      default:
        throw new Error('Error registering new user');
    }
  },
);

export const registerUserSlice = createSlice({
  name: 'registerUserSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(sendUser.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        sendUser.fulfilled,
        (
          state,
          action: PayloadAction<'idle' | 'success' | 'error409' | 'error'>,
        ) => {
          state.status = 'idle';
          state.registerStatus = action.payload;
        },
      );
  },
});

export const selectStatus = (state: RootState) =>
  state.registerUserReducer.status;

export const selectRegisterStatus = (state: RootState) =>
  state.registerUserReducer.registerStatus;

export default registerUserSlice.reducer;
