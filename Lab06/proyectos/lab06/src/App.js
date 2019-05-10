import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './views/Home';
import Details from './views/Details';
import Login from './views/Login';

class App extends Component {
  render() {
    return (<BrowserRouter>
      <div>
        <h1>Sitio de Peliculas</h1>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/details' component={Details} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>);
  }
}

export default App;
