import useGetMovie from '../hooks/useGetMovie';
import { IWatchedMovie } from '../types/type';

type Props = {
  movieId: string | null;
  onCloseDetail: () => void;
  onAddWatched: (movie: IWatchedMovie) => void;
  watched: IWatchedMovie[];
};

export function MovieDetail({
  movieId,
  onCloseDetail,
  onAddWatched,
  watched,
}: Props) {
  const { isLoading, movie } = useGetMovie(movieId!, Boolean(movieId));
  const iswatched = watched.map((movie) => movie.imdbID).includes(movieId!);

  const {
    Poster: poster,
    Title: title,
    Year: year,
    Runtime: runtime,
    imdbRating,
    Actors: actors,
    Director: director,
    Genre: genre,
    Plot: plot,
    Released: released,
  } = movie || {};

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: movieId!,
      Poster: poster!,
      Title: title!,
      imdbRating: Number(imdbRating!),
      runtime: Number(runtime?.split(' ')[0]),
      Year: year!,
    };
    onAddWatched(newWatchedMovie);
    onCloseDetail();
  }

  // z-index: 999;
  return (
    <div className="text-2xl leading-6">
      {isLoading ? (
        <p>loading the movie...</p>
      ) : (
        <>
          <header className="flex justify-center pt-5 ">
            <button
              className="absolute top-2 right-2 h-10 rounded-xl bg-slate-300 font-bold text-2xl px-2 aspect-square pb-1 cursor-pointer "
              onClick={onCloseDetail}
            >
              &larr;
            </button>
            <img
              className="w-1/3"
              src={poster}
              alt={`poster of ${movie?.Title} movie`}
            />

            <div className="w-auto px-12 py-10  flex flex-col gap-6">
              <h2 className="text-4xl mb-2 leading-4">{title}</h2>
              <p>
                {released} &bull; {runtime}{' '}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} imdb rating
              </p>
            </div>
          </header>

          <section className="p-16 flex flex-col gap-6">
            <div className="bg-slate-100 py-8 px-10 rounded-md mb-3 font-medium flex flex-col gap-10">
              {iswatched ? (
                <p>You already have watched this movie!</p>
              ) : (
                <button
                  className="bg-emerald-400 rounded-md text-2xl p-4 cursor-pointer font-bold hover:bg-emerald-500 transition-colors"
                  onClick={handleAdd}
                >
                  Add to list
                </button>
              )}
            </div>

            <p>
              <em> {plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
