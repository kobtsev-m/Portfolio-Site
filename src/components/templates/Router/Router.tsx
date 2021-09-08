import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from 'components/pages';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => <Home />} />
    </Switch>
  </BrowserRouter>
);
