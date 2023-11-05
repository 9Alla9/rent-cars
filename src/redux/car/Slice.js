import { createSlice } from '@reduxjs/toolkit';
import { getAllAdverts } from './Operations';

const advertsInitialState = {
  adverts: [],
  favoriteId: [],
  isLoading: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledGet = (state, action) => {
  state.isLoading = false;
  state.adverts = action.payload;
  state.error = '';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState: advertsInitialState,
  reducers: {
    addFavoriteId: (state, action) => {
      state.isLoading = false;
      const id = action.payload;
      if (!state.favoriteId.includes(id)) {
        state.favoriteId.push(id);
      }
    },
    removeFavoriteId: (state, action) => {
      state.isLoading = false;
      const id = action.payload;
      const index = state.favoriteId.indexOf(id);
      if (index !== -1) {
        state.favoriteId.splice(index, 1);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getAllAdverts.fulfilled, handleFulfilledGet)
      .addCase(getAllAdverts.pending, handlePending)
      .addCase(getAllAdverts.rejected, handleRejected);
  },
});

export const { addFavoriteId, removeFavoriteId } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;