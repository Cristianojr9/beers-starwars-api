import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Beers from './pages/Beers';
import Films from './pages/StarWars';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/beers" exact component={Beers} />
      <Route path="/starwars" component={Films} />
    </Switch>
  )
}

export default Routes;