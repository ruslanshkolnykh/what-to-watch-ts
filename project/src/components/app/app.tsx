import Main from '../main/main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import Review from '../review/review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';
import {AppRoute} from '../../const';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.Main} exact>
          <Main title={'testTitle'} genre={'genre'} date={'2014'} />
        </Route>
        <Route path={AppRoute.Login} exact>
          <Login />
        </Route>
        <Route path={AppRoute.MyList} exact>
          <MyList />
        </Route>
        <Route path={AppRoute.Film} exact>
          <Film />
        </Route>
        <Route path={AppRoute.Review} exact>
          <Review />
        </Route>
        <Route path={AppRoute.Player} exact>
          <Player />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
