import { IMovie } from '../types/type';

type Props = {
  movie: IMovie;
  onSelect: (id: string) => void;
};

export function Movie({ movie, onSelect }: Props) {
  return (
    <li
      className="grid grid-cols-3 px-2 py-4 shadow-md rounded-md"
      onClick={() => onSelect(movie.imdbID)}
    >
      <img className="w-16" src={movie.Poster} alt={`${movie.Title} poster`} />

      <h3 className="text-2xl">{movie.Title}</h3>

      <p>
        <span>🗓</span>
        <span>{movie.Year}</span>
      </p>
    </li>
  );
}
