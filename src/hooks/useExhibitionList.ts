import { getApiExhibitionList } from '@src/apis';
import { useQuery } from '@tanstack/react-query';

const useExhibitionList = () => {
  const { data: exhibitionList } = useQuery({
    queryFn: getApiExhibitionList,
    queryKey: ['exhibitionList'],
  });
  return { exhibitionList };
};

export default useExhibitionList;
