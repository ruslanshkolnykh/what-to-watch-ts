import {FilmData} from '../../types/types';
import {FilmInitial, GenreList} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {loadFilms, setGenre, loadPromoFilm} from '../action';

const initialState: FilmData = {
  genre: GenreList.AllGenres,
  films: [],
  promoFilm: FilmInitial,
  currentFilm: FilmInitial,
  isDataLoaded: false,
  favoriteFilms: [],
  similarFilms: [],
  comments: [],
};

const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload as GenreList;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload.films;
      state.isDataLoaded = true;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload.promoFilm;
    });
});

export { filmsData };
