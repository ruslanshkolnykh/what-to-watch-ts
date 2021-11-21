import { createReducer } from '@reduxjs/toolkit';
import { requireAuthorization, requireLogout } from '../action';
import { UserProcess } from '../../types/types';
import { AuthorizationStatus } from '../../const';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authInfo: undefined,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.authorizationStatus;
      state.authInfo = action.payload.authInfo;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.authInfo = undefined;
    });
});

export { userProcess };
