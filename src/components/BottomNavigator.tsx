import FilledStar from '@assets/icons/FilledStar';
import Ticket from '@assets/icons/Ticket';
import { cn } from '@utils/cn';
import { useSearchParams } from 'react-router-dom';

type Menu = 'list' | 'favorite';

function BottomNavigator() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab') ?? 'list';

  const handleSelect = (value: Menu) => () => setSearchParams({ tab: value });

  return (
    <nav
      className={cn(
        'fixed bottom-0 w-full flex flex-row justify-between h-20 border-t'
      )}
    >
      <button
        className={cn(
          'flex flex-col justify-center items-center w-full h-full gap-1'
        )}
        onClick={handleSelect('list')}
        type="button"
      >
        <Ticket size={18} />
        <span className={cn('text-xs', tab !== 'list' && 'text-gray-300')}>
          전시회
        </span>
      </button>
      <button
        className={cn(
          'flex flex-col justify-center items-center w-full h-full gap-1'
        )}
        onClick={handleSelect('favorite')}
        type="button"
      >
        <FilledStar size={18} />
        <span className={cn('text-xs', tab !== 'favorite' && 'text-gray-300')}>
          찜목록
        </span>
      </button>
    </nav>
  );
}

export default BottomNavigator;
