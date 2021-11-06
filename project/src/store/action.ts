import {ActionType, GenreList} from '../const';

const setGenre = (genre: GenreList) => ({
  type: ActionType.ChangeGenre,
  payload: {genre},
} as const);

export {setGenre};
