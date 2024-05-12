export interface IMovie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type?: string;
}

export interface IWatchedMovie extends IMovie {
  runtime: number;
  imdbRating: number;
  userRating?: number;
}

export interface IMovieDetail {
  Title: string;
  Year: string;
  Poster: string;
  Runtime: string;
  imdbID: string;
  imdbRating: string;
  Plot: string;
  Released: string;
  Actors: string;
  Director: string;
  Genre: string;
}
