import FilledStar from '@assets/icons/FilledStar';
import Star from '@assets/icons/Star';
import useFavoriteExhibitionList from '@hooks/useFavoriteExhibitionList';
import { Exhibition } from '@src/types';
import { cn } from '@utils/cn';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ExhibitionCard({ exhibition }: { exhibition: Exhibition }) {
  const { favoriteExhibitionList, updateFavoriteExhibitionIds } =
    useFavoriteExhibitionList();
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(
    favoriteExhibitionList?.some((favoriteExhibition) => {
      return favoriteExhibition.id === exhibition.id;
    }) ?? false
  );

  const toggleFavoriteExhibition = () => {
    setIsFavorite((prev) => !prev);
    updateFavoriteExhibitionIds(exhibition.id);
  };

  const handleClickReservation = () => navigate(`/exhibition/${exhibition.id}`);

  return (
    <>
      <img
        alt={exhibition.title}
        className={cn('w-20 h-20 rounded-lg')}
        loading="lazy"
        src={exhibition.imageUrl}
      />
      <div className={cn('flex flex-row justify-between w-full min-h-full')}>
        <div className={cn('flex flex-col pl-2.5 justify-between')}>
          <div className={cn('flex flex-col gap-0.5')}>
            <h2 className={cn('font-bold')}>{exhibition.title}</h2>
            <p className={cn('text-xs text-gray-400')}>{exhibition.place}</p>
            <p className={cn('text-xs text-semibold text-[#ff4800]')}>
              {exhibition.price}
            </p>
          </div>
          <p
            className={cn('text-[8px] text-[#3f3f3f]')}
          >{`${exhibition.date.started} ~ ${exhibition.date.ended}`}</p>
        </div>
        <div className={cn('flex flex-col h-full items-end justify-between')}>
          <button onClick={toggleFavoriteExhibition} type="button">
            {isFavorite ? <FilledStar size={18} /> : <Star size={18} />}
          </button>
          <button
            className={cn(
              'text-[8px] text-white py-1 px-1.5 bg-[#1a1a1a] rounded'
            )}
            onClick={handleClickReservation}
            type="button"
          >
            예매하기
          </button>
        </div>
      </div>
    </>
  );
}

export default ExhibitionCard;
