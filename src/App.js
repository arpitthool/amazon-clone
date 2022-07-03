import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";

function App() {
  return (
    // BEM convention
    <Router>

      <div className="app">
        <Header/>
        <Routes>

          <Route exact path='/' element={<><Home/></>}/>
          <Route exact path='/checkout' element={<><Checkout/></>} />

        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
