import { IWatchedMovie } from '../types/type';

type Props = {
  movie: IWatchedMovie;
  onDelete: (id: string) => void;
};

export function WatchedMovie({ movie, onDelete }: Props) {
  return (
    <li className="flex justify-between items-center p-2 rounded-md shadow-emerald-300 shadow relative">
      <img className="w-16" src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <p>
        <span>{movie.runtime} min</span>
      </p>

      <button
        className="absolute top-2 right-2 cursor-pointer text-sm rounded-full text-red-400 border border-red-400 px-1 hover:bg-red-400 hover:text-white transition-colors"
        onClick={() => onDelete(movie.imdbID)}
      >
        &#x2715;
      </button>
    </li>
  );
}
