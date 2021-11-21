import browserHistory from '../../browser-history';
import { Middleware } from 'redux';
import { State } from '../../types/types';
import {ActionType} from '../../const';

export const redirect: Middleware<unknown, State> =
  (_store) =>
    (next) =>
      (action) => {

        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
