export const getFavoriteExhibitionList = () => {
  const favoriteExhibitionList = localStorage.getItem('favorite');
  return favoriteExhibitionList === null
    ? []
    : JSON.parse(favoriteExhibitionList);
};

export const saveFavoriteExhibition = (id: number) => {
  const currentFavorites: number[] = getFavoriteExhibitionList();
  if (!currentFavorites.includes(id)) {
    currentFavorites.push(id);
    localStorage.setItem('favorite', JSON.stringify(currentFavorites));
  }
};

export const deleteFavoriteExhibition = (id: number) => {
  const currentFavorites: number[] = getFavoriteExhibitionList();
  const newFavorites = currentFavorites.filter((item) => item !== id);
  localStorage.setItem('favorite', JSON.stringify(newFavorites));
};
