import { getDetailExhibition } from '@src/apis';
import { useQuery } from '@tanstack/react-query';

const useExhibition = ({ id }: { id: number }) => {
  const { data: exhibition } = useQuery({
    queryFn: () => getDetailExhibition({ id }),
    queryKey: ['exhibitionDetail', { id }],
  });
  return { exhibition };
};

export default useExhibition;
