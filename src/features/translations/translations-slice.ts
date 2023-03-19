import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Translation } from '../../shared/models/translation-model';
import { getUserTranslationsList } from './translations-api';

export interface TranslationResponse {
  msg: string;
  translations: Translation[];
}

export interface TranslationState {
  status: 'idle' | 'loading' | 'failed';
  apiStatus: 'loading' | 'failed' | 'idle' | 'unused';
  responseMsg: string | undefined;
  translations: Translation[];
}

const initialState: TranslationState = {
  status: 'idle',
  apiStatus: 'unused',
  responseMsg: ' ',
  translations: [],
};

export const getTranslations = createAsyncThunk(
  'getTranslations/getTranslationsList',
  async (id: string) => {
    const apiResponse = await getUserTranslationsList(id);
    const data = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }
    return data;
  },
);

export const translationsSlice = createSlice({
  name: 'translationsSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTranslations.pending, state => {
        state.status = 'loading';
        state.apiStatus = 'loading';
      })
      .addCase(
        getTranslations.fulfilled,
        (state, action: PayloadAction<TranslationResponse>) => {
          state.status = 'idle';
          state.apiStatus = 'idle';
          state.translations = action.payload.translations;
        },
      )
      .addCase(getTranslations.rejected, (state, action) => {
        state.status = 'failed';
        state.apiStatus = 'failed';
        state.responseMsg = action.error.message;
      });
  },
});

export const selectapiStatus = (state: RootState) =>
  state.translationsReducer.apiStatus;

export const selectTranslations = (state: RootState) =>
  state.translationsReducer.translations;

export default translationsSlice.reducer;
