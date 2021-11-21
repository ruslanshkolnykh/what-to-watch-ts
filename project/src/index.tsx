import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {createAPI} from './services/api';
import {requireAuthorization, redirectToRoute} from './store/action';
import {AuthorizationStatus, AppRoute} from './const';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './store/root-reducer';
import {redirect} from './store/middlewares/redirect';
import {fetchFilmsAction} from './store/api-actions';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
  () => store.dispatch(redirectToRoute(AppRoute.NotFound)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(fetchFilmsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
