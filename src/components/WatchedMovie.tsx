import { IWatchedMovie } from '../types/type';

type Props = {
  movie: IWatchedMovie;
  onDelete: (id: string) => void;
};

export function WatchedMovie({ movie, onDelete }: Props) {
  return (
    <li className="grid grid-cols-3 px-2 py-2 rounded-md shadow-emerald-300 shadow ">
      <img className="w-16" src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <p>
        <span>⏳</span>
        <span>{movie.runtime} min</span>
      </p>

      <button
        className="absolute right-16 cursor-pointer font-bold text-sm rounded-full text-red-400 border border-red-400 px-2 py-1 hover:bg-red-400 hover:text-white transition-colors"
        onClick={() => onDelete(movie.imdbID)}
      >
        &#x2715;
      </button>
    </li>
  );
}
