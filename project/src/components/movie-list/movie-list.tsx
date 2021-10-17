import {FilmType} from '../../types/types';
import MovieItem from '../movie-item/movie-item';

type Props ={
  films: FilmType[],
}

function MovieList({films}:Props): JSX.Element {
  return (
    <>
      {films.map((film) => <MovieItem key = {film.id} film = {film}/>)}
    </>
  );
}

export default MovieList;
