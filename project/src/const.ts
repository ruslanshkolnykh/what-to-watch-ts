export enum AppRoute {
  Login = '/login',
  Main = '/',
  MyList = '/mylist',
  Film = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id'
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
