import FilledStar from '@assets/icons/FilledStar';
import Star from '@assets/icons/Star';
import { Exhibition } from '@src/types';
import { cn } from '@utils/cn';
import {
  deleteFavoriteExhibition,
  getFavoriteExhibitionList,
  saveFavoriteExhibition,
} from '@utils/favorite';
import { useState } from 'react';

function ExhibitionCard({ exhibition }: { exhibition: Exhibition }) {
  const favoriteExhibitionList = getFavoriteExhibitionList();

  const [isFavorite, setIsFavorite] = useState(
    favoriteExhibitionList?.includes(exhibition.id)
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      deleteFavoriteExhibition(exhibition.id);
    } else {
      saveFavoriteExhibition(exhibition.id);
    }
    setIsFavorite(!isFavorite);
  };

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
          <button onClick={toggleFavorite} type="button">
            {isFavorite ? <FilledStar size={18} /> : <Star size={18} />}
          </button>
          <button
            className={cn(
              'text-[8px] text-white py-1 px-1.5 bg-[#1a1a1a] rounded'
            )}
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
