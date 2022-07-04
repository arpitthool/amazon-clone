import React, { useEffect } from 'react';
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
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS = ',authUser);

      if(authUser) {
        // user logged in or was already logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

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
