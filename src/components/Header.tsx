import Back from '@assets/icons/Back';
import { cn } from '@utils/cn';
import { useNavigate } from 'react-router-dom';

type Props = {
  title?: string;
};

function Header({ title }: Props) {
  const navigate = useNavigate();

  return (
    <header
      className={cn(
        'flex flex-row items-center text-xl font-semibold h-16 px-3'
      )}
    >
      <button onClick={() => navigate(-1)} type="button">
        <Back size={24} />
      </button>
      <h1 className={cn('ml-3')}>{title}</h1>
    </header>
  );
}

export default Header;
