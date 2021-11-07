import {setGenre, loadPromoFilm, loadFilms, requireAuthorization, requireLogout} from '../store/action';
import {GenreList} from '../const';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';

export type FilmType = {
  'name': string,
  'poster_image': string,
  'preview_image': string,
  'background_image': string,
  'background_color': string,
  'description': string,
  'rating': number,
  'scores_count': number,
  'director': string,
  'starring': string[],
  'run_time': number,
  'genre': string,
  'released': number,
  'id': number,
  'is_favorite': boolean,
  'video_link': string,
  'preview_video_link': string
};

export type ReviewType = {
  id: number,
  user: {
    id: number,
    name: string
  },
  'rating': number,
  'comment': string,
  'date': string
};


export type Genre = {
  title: string,
  value: GenreList,
};

export type State = {
  genre: GenreList,
  films: FilmType[],
  isDataLoaded: boolean,
  promoFilm: FilmType,
};

export type Actions =
  | ReturnType<typeof setGenre>
  | ReturnType<typeof loadPromoFilm>
  | ReturnType<typeof loadFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;

export type AuthData = {
  login: string;
  password: string;
};
