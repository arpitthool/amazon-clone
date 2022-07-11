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
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

// const promise = loadStripe('MY_Secret_API_Key');

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

        <Route exact path="/payment">
          <Header />
          <Elements stripe={promise} >
            <Payment />
          </Elements>
        </Route>

        <Route exact path="/orders">
          <Header />
          <Orders />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
