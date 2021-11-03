import {FilmType} from '../../types/types';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Player from '../player/player';

type Props = {
  film: FilmType,
  changeFilmIDState: (id:number) => void,
  filmStateID: number,
}

function MovieItem({film, changeFilmIDState, filmStateID}:Props): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseOver={() => {changeFilmIDState(film.id);}} onMouseLeave={() => changeFilmIDState(0)}>
        {filmStateID === film.id ? <Player poster={film.preview_image} isPlaying src={film.preview_video_link}/> : <img src={film.preview_image} alt={film.name} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.replace(':id', String(film.id))}>{film.name}</Link>
      </h3>
    </article>
  );
}
export default MovieItem;
