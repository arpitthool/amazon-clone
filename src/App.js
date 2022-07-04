import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import Login from './Login';

function App() {
  return (
    // BEM convention
    <Router>

      <div className="app">
        <Routes>

          <Route exact path='/' element={<><Header/><Home/></>}/>
          <Route exact path='/login' element={<><Login/></>}/>
          <Route exact path='/checkout' element={<><Header/><Checkout/></>} />

        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
