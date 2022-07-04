import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
// import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';

function App() {
  // return (
  //   // BEM convention
  //   <Router>

  //     <div className="app">
  //       <Routes>

  //         <Route exact path='/' element={<><Header/><Home/></>}/>
  //         <Route exact path='/login' element={<><Login/></>}/>
  //         <Route exact path='/checkout' element={<><Header/><Checkout/></>} />

  //       </Routes>
  //     </div>
  //   </Router>
    
  // );
  // return (
  //   <Router>
  //     <div className="app">
  //       <Header />
  //       <Switch>
  //         <Route path="/checkout">
  //           <Checkout />
  //         </Route>
  //         <Route path="/">
  //           <Home />
  //         </Route>
  //       </Switch>
  //     </div>
  //   </Router>
  // );
  return (
      <div className="app">
        <h1>Hello</h1>
      </div>
  );
}

export default App;
