import { useQuery } from '@tanstack/react-query';
import { getMovie } from '../services/getMovie.service';

export default function useGetMovie(
  movieId: string = '',
  shouldEnableQuery: boolean = true
) {
  const { data: movie, isLoading } = useQuery({
    queryKey: ['movie', movieId],
    queryFn: () => getMovie(movieId),
    onError: (err: unknown) =>
      console.log(`An error of ${err} happened in fetching of the movie.`),
    enabled: Boolean(movieId) && shouldEnableQuery,
  });
  return { movie, isLoading };
}
