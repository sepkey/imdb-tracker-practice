import { IMovie } from '../types/type';
import { Movie } from './Movie';

export type Props = {
  movies: IMovie[];
  onSelect: (id: string) => void;
};

export function Movies({ movies, onSelect }: Props) {
  return (
    <ul className="overflow-y-scroll list-none p-6 flex flex-col gap-10 h-screen">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} onSelect={onSelect} />
      ))}
    </ul>
  );
}
