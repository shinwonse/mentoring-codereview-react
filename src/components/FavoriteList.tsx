import ExhibitionCard from '@components/ExhibitionCard';
import useFavoriteExhibitionList from '@hooks/useFavoriteExhibitionList';
import { cn } from '@utils/cn';

function FavoriteList() {
  const { favoriteExhibitionList, isLoading } = useFavoriteExhibitionList();

  return (
    <ul className={cn('flex flex-col gap-2.5 p-2.5')}>
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <li key={index} className={cn('flex flex-row h-20 w-full')}>
              <div
                className={cn('w-full h-full p-2.5 bg-gray-100 rounded-2xl')}
              />
            </li>
          ))
        : favoriteExhibitionList?.map((exhibition) => (
            <li
              key={exhibition.id}
              className={cn('flex flex-row h-full w-full')}
            >
              <ExhibitionCard exhibition={exhibition} />
            </li>
          ))}
    </ul>
  );
}

export default FavoriteList;
