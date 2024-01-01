import FilledStar from '@assets/icons/FilledStar';
import Ticket from '@assets/icons/Ticket';
import { cn } from '@utils/cn';
import { useState } from 'react';

type Menu = 'ticket' | 'star';

function BottomNavigator() {
  const [selected, setSelected] = useState<Menu>('ticket');

  const handleSelect = (value: Menu) => () => setSelected(value);

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
        onClick={handleSelect('ticket')}
        type="button"
      >
        <Ticket size={18} />
        <span
          className={cn('text-xs', selected !== 'ticket' && 'text-gray-300')}
        >
          전시회
        </span>
      </button>
      <button
        className={cn(
          'flex flex-col justify-center items-center w-full h-full gap-1'
        )}
        onClick={handleSelect('star')}
        type="button"
      >
        <FilledStar size={18} />
        <span className={cn('text-xs', selected !== 'star' && 'text-gray-300')}>
          찜목록
        </span>
      </button>
    </nav>
  );
}

export default BottomNavigator;
