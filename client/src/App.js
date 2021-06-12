import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/books" component={Saved} />
      </Switch>
    </Router>
  );
}

export default App;
