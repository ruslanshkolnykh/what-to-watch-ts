// import Main from '../main/main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
// import MyList from '../my-list/my-list';
// import Film from '../film/film';
// import AddReview from '../add-review/add-review';
// import Player from '../player/player';
import NotFound from '../not-found/not-found';
import {AppRoute/*,AuthorizationStatus*/} from '../../const';
// import PrivateRoute from '../private-route/private-route';
// import {State} from '../../types/types';
// import Spinner from '../spinner/spinner';
// import {connect, ConnectedProps} from 'react-redux';
//
// const mapStateToProps = ({films, isDataLoaded, promoFilm}: State) => ({
//   films,
//   isDataLoaded,
//   promoFilm,
// });


// const connector = connect(mapStateToProps);
//
// type PropsFromRedux = ConnectedProps<typeof connector>;

function App(): JSX.Element {
// function App(props : PropsFromRedux): JSX.Element {
//   const {isDataLoaded, films, promoFilm} = props;
//
//   if (!isDataLoaded) {
//     return (
//       <Spinner />
//     );
//   }
  return (
    <BrowserRouter>
      <Switch>
        {/*<Route path={AppRoute.Main} exact>*/}
        {/*  <Main promoFilm={promoFilm}/>*/}
        {/*</Route>*/}
        <Route path={AppRoute.Login} exact>
          <Login />
        </Route>
        {/*<PrivateRoute*/}
        {/*  exact*/}
        {/*  path={AppRoute.MyList}*/}
        {/*  render={() => <MyList films={films.filter((film) =>film.is_favorite)}/>}*/}
        {/*  authorizationStatus={AuthorizationStatus.Auth}*/}
        {/*>*/}
        {/*</PrivateRoute>*/}
        {/*<Route path={AppRoute.Film} render={(routeProps) =>*/}
        {/*  (films.filter((film) => film.id === Number(routeProps.match.params.id)))[0] ? <Film film={(films.filter((film) => film.id === Number(routeProps.match.params.id)))[0]}/> : <NotFound />}*/}
        {/*exact*/}
        {/*>*/}
        {/*</Route>*/}
        {/*<Route path={AppRoute.Review} render={(routeProps) =>*/}
        {/*  (films.filter((film) => film.id === Number(routeProps.match.params.id)))[0] ? <AddReview film={(films.filter((film) => film.id === Number(routeProps.match.params.id)))[0]}/> : <NotFound />}*/}
        {/*exact*/}
        {/*>*/}
        {/*</Route>*/}
        {/*<Route path={AppRoute.Player} render={(routeProps) =>*/}
        {/*  (films.filter((film) => film.id === Number(routeProps.match.params.id)))[0] ? <Player src={(films.filter((film) => film.id === Number(routeProps.match.params.id)))[0].video_link} isPlaying poster={(films.filter((film) => film.id === Number(routeProps.match.params.id)))[0].poster_image}/> : <NotFound />}*/}
        {/*exact*/}
        {/*>*/}
        {/*</Route>*/}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

// export default connector(App);
export default App;
