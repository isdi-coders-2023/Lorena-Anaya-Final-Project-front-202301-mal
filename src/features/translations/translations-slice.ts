import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { R } from 'msw/lib/glossary-de6278a9';
import { RootState } from '../../app/store';
import { Translation } from '../../shared/models/translation-model';
import {
  createTranslation,
  deleteTranslationById,
  getTranslationById,
  getTranslationsList,
  getUserTranslationsList,
  updateTranslationById,
  updateTranslationStatus,
} from './translations-api';

export interface TranslationsDeleteResponse {
  translation: Translation;
}
export interface TranslationResponse {
  msg: string;
  translations: Translation[];
  translation: {
    translation: Translation;
  };
  adminTranslations: Translation[];
}

type TranslationStateStatus = 'loading' | 'failed' | 'idle' | 'unused';

export interface TranslationState {
  status: 'idle' | 'loading' | 'failed';
  apiStatus: TranslationStateStatus;
  uploadTranslationStatus: TranslationStateStatus;
  responseMsg: string | undefined;
  translations: Translation[];
  translation: Translation;
  adminTranslations: Translation[];
  adminTranslationsStatus: TranslationStateStatus;
  deleteStatus: TranslationStateStatus;
}

const emptyTranslation: Translation = {
  bookingRef: '',
  dueDate: ' ',
  languageFrom: '',
  languageTo: '',
  words: 0,
  status: 'Pending',
  toTranslateDoc: '',
  translatedDoc: '',
  _id: '123',
};

const initialState: TranslationState = {
  status: 'idle',
  apiStatus: 'unused',
  responseMsg: ' ',
  translations: [],
  translation: emptyTranslation,
  uploadTranslationStatus: 'unused',
  adminTranslations: [],
  adminTranslationsStatus: 'unused',
  deleteStatus: 'unused',
};
export const deleteTranslationByIdAsync = createAsyncThunk(
  'deleteTranslationById/deleteTranslationByIdAsync',
  async (id: string) => {
    const apiResponse = await deleteTranslationById(id);
    const data = await apiResponse.json();
    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }

    return data;
  },
);

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

export const getAllTranslationsAsync = createAsyncThunk(
  'getTranslationsList/getAllTranslationsAsync',
  async () => {
    const apiResponse = await getTranslationsList();
    const data = await apiResponse.json();

    if (!apiResponse.ok) {
      throw new Error(`${data.msg}`);
    }

    return data;
  },
);

export const getTranslationsByIdAsync = createAsyncThunk(
  'getTranslationById/getTranslationByIdAsync',
  async (id: string) => {
    const apiResponse = await getTranslationById(id);
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

export interface UpdateTranslationArgs {
  form: HTMLFormElement;
  id: string;
}
export const updateTranslationByIdAsync = createAsyncThunk(
  'updateTranslationById/updateTranslationByIdAsync',
  async ({ form, id }: UpdateTranslationArgs) => {
    const formData = new FormData(form);
    const apiResponse = await updateTranslationById(formData, id);
    const data: TranslationResponse = await apiResponse.json();

    return data;
  },
);

export interface UpdateTranslationStatusArgs {
  status: string;
  id: string;
}

export const updateTranslationStatusAsync = createAsyncThunk(
  'updateTranslationStatus/updateTranslationStatusAsync',
  async ({ status, id }: UpdateTranslationStatusArgs) => {
    const apiResponse = await updateTranslationStatus(status, id);
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
      })
      .addCase(getTranslationsByIdAsync.pending, state => {
        state.status = 'loading';
        state.apiStatus = 'loading';
      })
      .addCase(
        getTranslationsByIdAsync.fulfilled,
        (state, action: PayloadAction<TranslationResponse>) => {
          state.status = 'idle';
          state.apiStatus = 'idle';
          state.translation = action.payload.translation.translation;
        },
      )
      .addCase(getTranslationsByIdAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.apiStatus = 'failed';
        state.responseMsg = action.error.message;
      })
      .addCase(updateTranslationByIdAsync.pending, state => {
        state.status = 'loading';
        state.uploadTranslationStatus = 'loading';
      })
      .addCase(updateTranslationByIdAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.uploadTranslationStatus = 'failed';
        state.responseMsg = action.error.message;
      })
      .addCase(updateTranslationByIdAsync.fulfilled, state => {
        state.status = 'idle';
        state.uploadTranslationStatus = 'idle';
      })
      .addCase(getAllTranslationsAsync.pending, state => {
        state.status = 'loading';
        state.adminTranslationsStatus = 'loading';
      })
      .addCase(
        getAllTranslationsAsync.fulfilled,
        (state, action: PayloadAction<TranslationResponse>) => {
          state.status = 'idle';
          state.adminTranslationsStatus = 'idle';
          state.adminTranslations = action.payload.adminTranslations;
        },
      )
      .addCase(getAllTranslationsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.adminTranslationsStatus = 'failed';
        state.responseMsg = action.error.message;
      })
      .addCase(deleteTranslationByIdAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(deleteTranslationByIdAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.responseMsg = action.error.message;
      })
      .addCase(
        deleteTranslationByIdAsync.fulfilled,
        (state, action: PayloadAction<TranslationsDeleteResponse>) => {
          state.status = 'idle';
          state.deleteStatus = 'idle';

          /* istanbul ignore next */
          const translationToDelete = state.adminTranslations.findIndex(
            adminTranslation =>
              adminTranslation._id === action.payload.translation._id,
          );

          state.adminTranslations.splice(translationToDelete, 1);
        },
      );
  },
});

export const selectapiStatus = (state: RootState) =>
  state.translationsReducer.apiStatus;

export const selectadminTranslationsStatus = (state: RootState) =>
  state.translationsReducer.adminTranslationsStatus;

export const selectTranslations = (state: RootState) =>
  state.translationsReducer.translations;

export const selectAdminTranslations = (state: RootState) =>
  state.translationsReducer.adminTranslations;

export const selectTranslation = (state: RootState) =>
  state.translationsReducer.translation;

export const selectTranslationUploadStatus = (state: RootState) =>
  state.translationsReducer.uploadTranslationStatus;

export default translationsSlice.reducer;
