import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Translation } from '../../shared/models/translation-model';
import { createTranslation, getUserTranslationsList } from './translations-api';

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

export const createTranslationAsync = createAsyncThunk(
  'createTranslation/createTranslationAsync',
  async (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const apiResponse = await createTranslation(formData);
    const data: TranslationResponse = await apiResponse.json();

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
      })
      .addCase(createTranslationAsync.pending, state => {
        state.status = 'loading';
        state.apiStatus = 'loading';
      })
      .addCase(createTranslationAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.apiStatus = 'failed';
        state.responseMsg = action.error.message;
      })
      .addCase(createTranslationAsync.fulfilled, state => {
        state.status = 'idle';
        state.apiStatus = 'idle';
      });
  },
});

export const selectapiStatus = (state: RootState) =>
  state.translationsReducer.apiStatus;

export const selectTranslations = (state: RootState) =>
  state.translationsReducer.translations;

export default translationsSlice.reducer;
