import { useState } from 'react';
import { Movies } from './components/Movies';
import { WatchedMovies } from './components/WatchedMovies';
import { SearchBox } from './components/SearchBox';
import useGetMovies from './hooks/useGetMovies';
import { IMovie, IWatchedMovie } from './types/type';
import { MovieDetail } from './components/MovieDetail';
import { useLocalStorage } from './hooks/useLocalStorage';

export default function App() {
  const [query, setQuery] = useState('');
  const { movies, isFetching: isFetchingMovies } = useGetMovies(query);
  const [selected, setSelected] = useState<string | null>(null);
  const [watched, setWatched] = useLocalStorage([], 'watched');
  function handleSelectMovie(id: string) {
    setSelected((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseDetaild() {
    setSelected(null);
  }

  function handleAddWatched(movie: IWatchedMovie) {
    setWatched((prev) => [...prev, movie]);
  }

  function handleDeleteWatched(id: string) {
    setWatched((movies) => movies.filter((movie) => movie.imdbID !== id));
  }
  return (
    <div className="p-4 h-screen">
      <SearchBox query={query} setQuery={setQuery} />
      <main className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 ">
        <div className="w-auto rounded-sm border-2 border-slate-200">
          <h2 className="text-center text-slate-800 font-bold text-xl mb-4">
            List of movies
          </h2>
          {isFetchingMovies ? (
            <p> Loading movies...</p>
          ) : (
            <Movies movies={movies as IMovie[]} onSelect={handleSelectMovie} />
          )}
        </div>

        <div className="w-auto rounded-sm border relative">
          {selected ? (
            <MovieDetail
              onAddWatched={handleAddWatched}
              onCloseDetail={handleCloseDetaild}
              movieId={selected}
              watched={watched}
            />
          ) : (
            <WatchedMovies watched={watched} onDelete={handleDeleteWatched} />
          )}
        </div>
      </main>
    </div>
  );
}
