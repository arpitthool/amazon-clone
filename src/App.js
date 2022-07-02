import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom"

function App() {
  return (
    // BEM convention
    <Router>

      <div className="app">

        <Routes>

          <Route exact path='/' element={<><Header/><Home/></>}/>
          <Route exact path='/checkout' element={<><Header/><p>Basket</p></>} />

        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
