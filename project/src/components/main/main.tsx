import {FilmType} from '../../types/types';
import MovieList from '../movie-list/movie-list';
import Header from '../header/header';
import Footer from '../footer/footer';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

type Props ={
  films:FilmType[],
}

function Main({films}:Props): JSX.Element {
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{films[0].name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{films[0].genre}</span>
                <span className="film-card__year">{films[0].released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <Link to={AppRoute.Main} className="catalog__genres-link">All genres</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={AppRoute.Main} className="catalog__genres-link">Comedies</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={AppRoute.Main} className="catalog__genres-link">Crime</Link>
            </li>
            <li className="catalog__genres-item">
              <a href="/" className="catalog__genres-link">Documentary</a>
            </li>
            <li className="catalog__genres-item">
              <Link to={AppRoute.Main} className="catalog__genres-link">Dramas</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={AppRoute.Main} className="catalog__genres-link">Horror</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={AppRoute.Main} className="catalog__genres-link">Kids & Family</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={AppRoute.Main} className="catalog__genres-link">Romance</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={AppRoute.Main} className="catalog__genres-link">Sci-Fi</Link>
            </li>
            <li className="catalog__genres-item">
              <Link to={AppRoute.Main} className="catalog__genres-link">Thrillers</Link>
            </li>
          </ul>

          <div className="catalog__films-list">
            <MovieList films={films} />
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Main;
