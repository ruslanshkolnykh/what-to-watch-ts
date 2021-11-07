import {ActionType, GenreList, AuthorizationStatus} from '../const';
import {FilmType} from '../types/types';


export const setGenre = (genre: GenreList) => ({
  type: ActionType.ChangeGenre,
  payload: {genre},
} as const);

export const loadPromoFilm = (film: FilmType) => ({
  type: ActionType.LoadPromoFilm,
  payload: film,
}as const);

export const loadFilms = (films: FilmType[]) => ({
  type: ActionType.LoadFilms,
  payload: films,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
