import ExhibitionCard from '@components/ExhibitionCard';
import useExhibitionList from '@hooks/useExhibitionList';
import { cn } from '@utils/cn';

function ExhibitionList() {
  const { exhibitionList } = useExhibitionList();

  return (
    <ul className={cn('flex flex-col gap-2.5 p-2.5')}>
      {exhibitionList?.map((exhibition) => (
        <li key={exhibition.id} className={cn('flex flex-row h-full w-full')}>
          <ExhibitionCard exhibition={exhibition} />
        </li>
      ))}
    </ul>
  );
}

export default ExhibitionList;
