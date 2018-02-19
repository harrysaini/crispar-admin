import React, {Component} from 'react';
import {HashRouter , Switch , Route} from 'react-router-dom';
import Full from './components/Full/Full.js';


class App extends Component {
  render() {
    return (
    <HashRouter>
      <Switch>
        <Route path="/" name="Home" component={Full}/>
      </Switch>
    </HashRouter>
    );
}
}

export default App;
