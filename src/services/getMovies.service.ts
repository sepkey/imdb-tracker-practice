import { IMovie } from '../types/type';

export async function getMovies(query: string) {
  const response = await fetch(
    `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${query}`
  );

  if (!response.ok)
    throw new Error('Something went wrong while fetching movies!');

  const data = await response.json();

  const body = data.Search as unknown;

  assertIsMovies(body);
  return body;
}

export function assertIsMovies(
  moviesData: unknown
): asserts moviesData is IMovie[] {
  if (!Array.isArray(moviesData)) {
    throw new Error("movies isn't an array");
  }
  if (moviesData.length === 0) {
    return;
  }
  moviesData.forEach((movie) => {
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
    if (!('Type' in movie)) {
      throw new Error("Movie doesn't contain Type");
    }
    if (typeof movie.Type !== 'string') {
      throw new Error('Type is not a string');
    }
  });
}
