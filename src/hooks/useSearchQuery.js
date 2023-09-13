import { useQuery } from '@tanstack/react-query';
import LoadData from '../services/fetchRepos';

export default function useSearchQuery(search, sort, order) {
  return useQuery({
    queryKey: ['repos', search, sort, order],
    queryFn: () => LoadData(search, sort, order),
    keepPreviousData: true,
  });
}
