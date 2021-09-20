import { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from 'components/pages';

export const Router: FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' render={() => <Home />} />
    </Switch>
  </BrowserRouter>
);
