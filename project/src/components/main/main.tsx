import {FilmType, State} from '../../types/types';
import MovieList from '../movie-list/movie-list';
import Header from '../header/header';
import Footer from '../footer/footer';
import GenresList from '../genre-list/genre-list';
import {connect, ConnectedProps} from 'react-redux';
import {GenreList, FILM_STEP_NUMBER} from '../../const';
import ShowMore from '../show-more/show-more';
import {useState} from 'react';

const mapStateToProps = ({films, genre}: State) => ({
  films: getFilteredFilms(films, genre),
});


const connector = connect(mapStateToProps);

type MainProps = ConnectedProps<typeof connector> & {
  films:FilmType[],
}

const getFilteredFilms = (films:FilmType[], genre:string) => {

  if (genre === GenreList.AllGenres) {
    return films;
  }

  return films.filter((film:FilmType) => film.genre === genre);
};

function Main({films}: MainProps): JSX.Element {
  const [filmListAmount, changeFilmListAmount] = useState(FILM_STEP_NUMBER);

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
              <h2 className="film-card__title">films[0].name</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">films[0].genre</span>
                <span className="film-card__year">films[0].released</span>
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

          <GenresList />

          <div className="catalog__films-list">
            <MovieList films={films.slice(0, filmListAmount)} />
          </div>

          {filmListAmount < films.length ? <ShowMore changeFilmListAmount={changeFilmListAmount} filmsAmount={filmListAmount}/> : ''}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default connector(Main);
