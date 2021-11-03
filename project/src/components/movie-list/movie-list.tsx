import {FilmType} from '../../types/types';
import MovieItem from '../movie-item/movie-item';
import {useState} from 'react';

type Props ={
  films: FilmType[],
}

function MovieList({films}:Props): JSX.Element {
  const [filmStateID, changeFilmStateID] = useState(0);
  return (
    <>
      {films.map((film) => <MovieItem key = {film.id} film = {film} filmStateID={filmStateID} changeFilmIDState={changeFilmStateID}/>)}
    </>
  );
}

export default MovieList;
