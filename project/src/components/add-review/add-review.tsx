import Logo from '../logo/logo';
import {FilmType} from '../../types/types';
import SendCommentForm from '../send-comment-form/send-comment-form';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

type Props = {
  film: FilmType,
}

function AddReview({film}:Props): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.background_image} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film.replace(':id', String(film.id))} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Review.replace(':id', String(film.id))} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <Link to={AppRoute.Main} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.poster_image} alt={film.name} width="218" height="327"/>
        </div>
      </div>

      <SendCommentForm />

    </section>
  );
}

export default AddReview;
