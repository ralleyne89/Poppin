import React from 'react';
import LandingPage from '../src/views/LandingPage'
// import FavoritePage from '../src/views/FavoritePage'
import './styles/app.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
<NavBar/>
<div>
    <Switch>
      <Route exact path='/'>
      <LandingPage/>
      </Route>
      {/* <Route exact path='/favorite'>
      <FavoritePage/>
      </Route> */}

    </Switch>
</div>
    </Router>
  );
}

export default App;
