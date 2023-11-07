export const selectAdverts = state => state.car.car;
export const selectIsLoading = state => state.car.isLoading;
export const selectError = state => state.car.error;
export const selectFavorites = state => state.car.favoriteId;
export const selectAdvertById = (state, id) => {
  const sars = state.car.cars;
  const car = cars.find(car => car.id === id);

  return car;
};

