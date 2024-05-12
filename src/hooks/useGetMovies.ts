import { useQuery } from '@tanstack/react-query';
import { getMovies } from '../services/getMovies';

export default function useGetMovies(query: string) {
  const { isFetching, data: movies } = useQuery({
    queryKey: ['movies', query],
    queryFn: () => getMovies(query),
    retry: 1,
  });
  return { movies, isFetching };
}
