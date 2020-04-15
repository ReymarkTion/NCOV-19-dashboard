import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';

import { history, withAuth } from '../_helper';
import Ncov19 from '../Ncov19/layouts/Ncov19';
//import ICPEP_SE from '../ICPEP_SE/layouts/ICPEP_SE';

export class App extends React.Component {
  render() {
    return (
      <Router history={ history }>
        <Switch>
          <Route path="/ncov19" component={ Ncov19 }/>
          {/*<Route path="/" component={ ICPEP_SE } />*/}
          <Route path="/" render={() => <div>404</div>}/>
        </Switch>
      </Router>
    );
  }
}