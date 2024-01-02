import useExhibitionList from '@hooks/useExhibitionList';
import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const FAVORITE_EXHIBITION_LOCAL_STORAGE_KEY = 'favoriteExhibition';

export const favoriteExhibitionIdsAtom = atomWithStorage<number[]>(
  FAVORITE_EXHIBITION_LOCAL_STORAGE_KEY,
  []
);

const useFavoriteExhibitionList = () => {
  const [favoriteExhibitionIds, setFavoriteExhibitionIds] = useAtom(
    favoriteExhibitionIdsAtom
  );
  const { exhibitionList, isLoading } = useExhibitionList();
  const favoriteExhibitionList = exhibitionList?.filter((item) =>
    favoriteExhibitionIds.includes(item.id)
  );

  const updateFavoriteExhibitionIds = (id: number) => {
    if (favoriteExhibitionIds.includes(id)) {
      setFavoriteExhibitionIds(
        favoriteExhibitionIds.filter((item) => item !== id)
      );
    } else {
      setFavoriteExhibitionIds([...favoriteExhibitionIds, id]);
    }
  };

  return {
    exhibitionList,
    favoriteExhibitionList,
    isLoading,
    updateFavoriteExhibitionIds,
  };
};

export default useFavoriteExhibitionList;
