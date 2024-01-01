import useExhibitionList from '@hooks/useExhibitionList';
import { getApiExhibitionList } from '@src/apis';

const useFavoriteExhibitionList = () => {
  const { exhibitionList } = useExhibitionList();
  const favoriteExhibitionIds = getApiExhibitionList();

  return { exhibitionList, favoriteExhibitionIds };
};

export default useFavoriteExhibitionList;
