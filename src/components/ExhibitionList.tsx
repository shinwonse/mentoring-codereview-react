import ExhibitionCard from '@components/ExhibitionCard';
import useExhibitionList from '@hooks/useExhibitionList';
import { cn } from '@utils/cn';

function ExhibitionList() {
  const { exhibitionList, isLoading } = useExhibitionList();

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
        : exhibitionList?.map((exhibition) => (
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

export default ExhibitionList;
