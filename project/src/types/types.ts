import {setGenre, loadPromoFilm, loadFilms, requireAuthorization, requireLogout} from '../store/action';
import {GenreList, AuthorizationStatus} from '../const';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {Token} from '../services/token';
import {RootState} from '../store/root-reducer';

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

// export type FilmsData = {
//   activeGenre: string,
//   films: FilmType[],
//   favoriteFilms: FilmType[],
//   film?: FilmType,
//   promoFilm?: FilmType,
//   reviews: ReviewType[],
//   similarFilms: FilmType[],
//   showedFilms: number,
//   isDataLoaded: boolean,
// };

export type State = RootState;

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

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  authInfo?: AuthInfo,
};

export type FilmData = {
  genre: GenreList,
  films: FilmType[],
  promoFilm: FilmType,
  currentFilm: FilmType,
  isDataLoaded: boolean,
  favoriteFilms: FilmType[],
  similarFilms: FilmType[],
  comments: ReviewType[],
};

export type AuthInfo = {
  id: number,
  name: string,
  email: string,
  avatarUrl: string,
  token: Token,
}
