import useExhibitionList from '@hooks/useExhibitionList';
import { getFavoriteExhibitionList } from '@utils/favorite';

const useFavoriteExhibitionList = () => {
  const { exhibitionList } = useExhibitionList();
  const favoriteExhibitionIds = getFavoriteExhibitionList();
  const favoriteExhibitionList = exhibitionList?.filter((item) =>
    favoriteExhibitionIds.includes(item.id)
  );

  return { exhibitionList, favoriteExhibitionList };
};

export default useFavoriteExhibitionList;
