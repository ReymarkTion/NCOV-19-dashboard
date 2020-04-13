import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { history, withAuth } from '../_helper';
import Ncov19 from '../Ncov19/layouts/Ncov19';

export class App extends React.Component {
  render() {
    return (
      <Router history={ history }>
        <Switch>
          <Route path="/" component={ Ncov19 }/>
          <Route path="/" render={() => <div>404</div>}/>
        </Switch>
      </Router>
    );
  }
}