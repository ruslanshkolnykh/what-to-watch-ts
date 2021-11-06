import {FILM_STEP_NUMBER} from '../../const';

type ShowMoreProps = {
  changeFilmListAmount: (amount:number) => void,
  filmsAmount: number,
}

function ShowMore({changeFilmListAmount, filmsAmount}:ShowMoreProps): JSX.Element {
  return(
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => changeFilmListAmount(filmsAmount + FILM_STEP_NUMBER)}>Show more</button>
    </div>
  );
}

export default ShowMore;
