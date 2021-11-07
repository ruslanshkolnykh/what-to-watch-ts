import {Actions, State} from '../types/types';
import {ActionType, AuthorizationStatus, GenreList} from '../const';

const promoMock =   {
  'name':'',
  'poster_image':'',
  'preview_image':'',
  'background_image':'',
  'background_color':'',
  'description':'',
  'rating':0,
  'scores_count':0,
  'director':'',
  'starring':[],
  'run_time':0,
  'genre':'',
  'released':0,
  'id':0,
  'is_favorite':false,
  'video_link':'',
  'preview_video_link':'',
};

const initialState = {
  genre: GenreList.AllGenres,
  films: [],
  isDataLoaded: false,
  authorizationStatus: AuthorizationStatus.Unknown,
  promoFilm: promoMock,
} as State;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.LoadPromoFilm:
      return {...state, promoFilm: action.payload} as State;
    case ActionType.LoadFilms:
      return {...state, films: action.payload} as State;
    case ActionType.ChangeGenre:
      return {...state, genre: action.payload.genre} as State;
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        isDataLoaded: true,
      } as State;
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth} as State;
    default:
      return state;
  }
};

export {reducer};
