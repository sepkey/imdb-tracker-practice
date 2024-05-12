import { IWatchedMovie } from '../types/type';
import { WatchedMovie } from './WatchedMovie';

type Props = {
  watched: IWatchedMovie[];
  onDelete: (id: string) => void;
};

export function WatchedMovies({ watched, onDelete }: Props) {
  return (
    <>
      <h2 className="text-center text-emerald-600 font-bold text-xl mb-4">
        List of watched movies
      </h2>
      <ul className="overflow-y-scroll p-6 list-none flex flex-col gap-4 ">
        {watched.map((movie) => (
          <WatchedMovie key={movie.imdbID} movie={movie} onDelete={onDelete} />
        ))}
      </ul>
    </>
  );
}
