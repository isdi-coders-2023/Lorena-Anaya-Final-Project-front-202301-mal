import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { User } from '../../shared/models/user-model';
import { getUsersList } from './users-api';

export interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
};

export const getAllUsers = createAsyncThunk(
  'allUsers/getAllUsers',
  async () => {
    const response = await getUsersList();
    const allUsers = await response.json();

    return allUsers;
  },
);

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,

  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getAllUsers.pending, (state: { status: string }) => {
        state.status = 'loading';
      })
      .addCase(
        getAllUsers.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.status = 'idle';
          state.users = action.payload;
        },
      )
      .addCase(getAllUsers.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const selectUsers = (state: RootState) => state.usersReducer.users;

export default usersSlice.reducer;
