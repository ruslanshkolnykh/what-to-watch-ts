import {FilmType} from '../../types/types';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

type Props = {
  film: FilmType,
}

function MovieItem({film}:Props): JSX.Element {
  const [,setSate] = useState(0);


  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseOver={()=>{setSate(film.id);}}>
        <img src={film.preview_image} alt={film.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.replace(':id', String(film.id))}>{film.name}</Link>
      </h3>
    </article>
  );
}
export default MovieItem;
