import { IMovieDetail } from '../types/type';

export async function getMovie(movieId: string) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${
      import.meta.env.VITE_API_KEY
    }&i=${movieId}`
  );

  if (!response.ok)
    throw new Error('Something went wrong while fetching the movie!');

  const data = (await response.json()) as unknown;

  assertIsMovie(data);
  return data;
}

export function assertIsMovie(movie: unknown): asserts movie is IMovieDetail {
  if (!movie) {
    throw new Error('Movie is null or undefined');
  }

  if (typeof movie !== 'object') {
    throw new Error("Movie isn't an object");
  }

  if (Object.keys(movie).length === 0) {
    return;
  }

  if (!('Title' in movie)) {
    throw new Error("Movie doesn't contain Title");
  }
  if (typeof movie.Title !== 'string') {
    throw new Error('Title is not a string');
  }
  if (!('Poster' in movie)) {
    throw new Error("Movie doesn't contain Poster");
  }
  if (typeof movie.Poster !== 'string') {
    throw new Error('Poster is not a string');
  }
  if (!('Year' in movie)) {
    throw new Error("Movie doesn't contain Year");
  }
  if (typeof movie.Year !== 'string') {
    throw new Error('Year is not a string');
  }
  if (!('imdbID' in movie)) {
    throw new Error("Movie doesn't contain imdbID");
  }
  if (typeof movie.imdbID !== 'string') {
    throw new Error('imdbID is not a string');
  }
  if (!('Runtime' in movie)) {
    throw new Error("Movie doesn't contain Runtime");
  }
  if (typeof movie.Runtime !== 'string') {
    throw new Error('Runtime is not a string');
  }
  if (!('imdbRating' in movie)) {
    throw new Error("Movie doesn't contain imdbRating");
  }
  if (typeof movie.imdbRating !== 'string') {
    throw new Error('imdbRating is not a string');
  }
  ///////
  if (!('Plot' in movie)) {
    throw new Error("Movie doesn't contain Plot");
  }
  if (typeof movie.Plot !== 'string') {
    throw new Error('Plot is not a string');
  }
  if (!('Released' in movie)) {
    throw new Error("Movie doesn't contain Released");
  }
  if (typeof movie.Released !== 'string') {
    throw new Error('Released is not a string');
  }
  if (!('Actors' in movie)) {
    throw new Error("Movie doesn't contain Actors");
  }
  if (typeof movie.Actors !== 'string') {
    throw new Error('Actors is not a string');
  }
  if (!('Director' in movie)) {
    throw new Error("Movie doesn't contain Director");
  }
  if (typeof movie.Director !== 'string') {
    throw new Error('Director is not a string');
  }
  if (!('Genre' in movie)) {
    throw new Error("Movie doesn't contain Genre");
  }
  if (typeof movie.Genre !== 'string') {
    throw new Error('Genre is not a string');
  }
}
