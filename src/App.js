import React from 'react';
import LandingPage from '../src/views/LandingPage'
import './styles/app.css'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
<NavBar/>
<div>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
    </Switch>
</div>
    </Router>
  );
}

export default App;
