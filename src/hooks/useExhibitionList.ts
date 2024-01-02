import { getApiExhibitionList } from '@src/apis';
import { useQuery } from '@tanstack/react-query';

const useExhibitionList = () => {
  const { data: exhibitionList, isLoading } = useQuery({
    queryFn: getApiExhibitionList,
    queryKey: ['exhibitionList'],
  });
  return { exhibitionList, isLoading };
};

export default useExhibitionList;
