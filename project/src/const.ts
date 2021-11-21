export enum AppRoute {
  Login = '/login',
  Main = '/',
  MyList = '/mylist',
  Film = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '/not-found',
}
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum ActionType {
  ChangeGenre = 'filmList/changeGenre',
  LoadPromoFilm = 'data/loadPromoFilm',
  LoadFilms = 'data/loadFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'main/redirectToRoute',
}

export enum GenreList {
  AllGenres = 'allGenres',
  Comedies = 'Comedies',
  Crime = 'Crime',
  Documentary = 'Documentary',
  Dramas = 'Drama',
  Horror = 'Horror',
  KidsAndFamily = 'kidsAndFamily',
  Romance = 'Romance',
  SciFi = 'Sci-Fi',
  Thrillers = 'Thriller',
}

export const FILM_STEP_NUMBER = 8;

export enum APIRoute {
  PromoFilm = '/promo',
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

export const FilmInitial =   {
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

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}
