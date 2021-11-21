import {combineReducers} from 'redux';
import {filmsData} from './film-data/film-data';
import {userProcess} from './user-process/user-process';
import {NameSpace} from '../const';

const rootReducer = combineReducers({
  [NameSpace.Data]: filmsData,
  [NameSpace.User]: userProcess,
});

export {NameSpace, rootReducer};
export type RootState = ReturnType<typeof rootReducer>;
