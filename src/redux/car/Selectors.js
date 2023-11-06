export const selectAdverts = state => state.adverts.adverts;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
export const selectFavorites = state => state.adverts.favoriteId;
export const selectAdvertById = (state, id) => {
  const adverts = state.adverts.adverts;
  const advert = adverts.find(advert => advert.id === id);

  return advert;
};

