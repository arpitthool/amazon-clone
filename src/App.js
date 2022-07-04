import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login';

function App() {
  return (
    // BEM convention
    <Router>
    <div className="app">
      <Switch>
        
        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route exact path="/checkout">
          <Header />
          <Checkout/>
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
