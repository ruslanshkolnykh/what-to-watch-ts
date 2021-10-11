import Main from '../main/main';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../login/login';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import Review from '../review/review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <Main title={'testTitle'} genre={'genre'} date={'2014'} />
        </Route>
        <Route path='/login' exact>
          <Login />
        </Route>
        <Route path='/mylist' exact>
          <MyList />
        </Route>
        <Route path='/films/:id' exact>
          <Film />
        </Route>
        <Route path='/films/:id/review' exact>
          <Review />
        </Route>
        <Route path='/player/:id' exact>
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
