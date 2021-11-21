import {ActionType, AppRoute, AuthorizationStatus} from '../const';
import {FilmType, AuthInfo} from '../types/types';
import {createAction} from '@reduxjs/toolkit';

export const setGenre = createAction(
  ActionType.ChangeGenre,
  (genre: string) => ({
    payload: genre,
  }),
);

export const loadPromoFilm = createAction(
  ActionType.LoadPromoFilm,
  (promoFilm: FilmType) => ({
    payload: {
      promoFilm,
    },
  }),
);

export const loadFilms = createAction(
  ActionType.LoadFilms,
  (films: FilmType[]) => ({
    payload: {
      films,
    },
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authorizationStatus: AuthorizationStatus, authInfo?: AuthInfo) => ({
    payload: {
      authorizationStatus,
      authInfo,
    },
  }),
);

export const requireLogout = createAction(ActionType.RequireLogout);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute | string) => ({
    payload: url,
  }),
);
