import Films from '../mocks/films';
import {Actions, State} from '../types/types';
import {ActionType, GenreList} from '../const';

const initialState = {
  genre: GenreList.AllGenres,
  films: Films,
} as const;

const reducer = (action: Actions, state: State = initialState): State => {
  switch (action.type) {
    case ActionType.ChangeGenre: {
      return {...state, genre: action.payload.genre};
    }
    default: {
      return state;
    }
  }
};

export {reducer};
