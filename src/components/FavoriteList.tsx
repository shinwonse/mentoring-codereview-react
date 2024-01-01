import ExhibitionCard from '@components/ExhibitionCard';
import useFavoriteExhibitionList from '@hooks/useFavoriteExhibitionList';
import { cn } from '@utils/cn';

function FavoriteList() {
  const { favoriteExhibitionList } = useFavoriteExhibitionList();

  return (
    <ul className={cn('flex flex-col gap-2.5 p-2.5')}>
      {favoriteExhibitionList?.map((exhibition) => (
        <li key={exhibition.id} className={cn('flex flex-row h-full w-full')}>
          <ExhibitionCard exhibition={exhibition} />
        </li>
      ))}
    </ul>
  );
}

export default FavoriteList;
