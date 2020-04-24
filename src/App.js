import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Pizza from "./Components/Pizza";
import Home from "./Components/Home"
// import "./styles.css";

const App = () => {
  return (
    <Router>

    <div className = "title">
      <h1>Lambda Eats</h1>
      <p>For Starving Coders</p>
    </div>

      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pizza">Order a Pizza</Link>
        </li>
      </nav>

      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pizza" component={Pizza} />
        </Switch>
      </div>

    </Router>
  );
};

export default App;