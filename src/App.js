import React from "react";
import "./styles.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./pages/Signin";
export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
