import { IMovie } from '../types/type';

type Props = {
  movie: IMovie;
  onSelect: (id: string) => void;
};

export function Movie({ movie, onSelect }: Props) {
  return (
    <li
      className="flex justify-around items-center cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group h-52 "
      onClick={() => onSelect(movie.imdbID)}
    >
      <img className="w-14" src={movie.Poster} alt={`${movie.Title} poster`} />

      <h3 className="text-xl truncate">{movie.Title}</h3>

      <p>
        <span>{movie.Year}</span>
      </p>
    </li>
  );
}
