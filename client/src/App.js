import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import ParticlesBg from 'particles-bg'
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from './components/BubblePage'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return ( 
    <div>
    <ParticlesBg type="circle" bg={true}/>
    <Router>
      <header>
        <NavLink  to="/">Login</NavLink>
        <NavLink to="/bubble-page">Bubblepage</NavLink>
      </header>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/bubble-page" component={BubblePage}/>
      </div>
    </Router>
    </div>
  );
}


export default App;
