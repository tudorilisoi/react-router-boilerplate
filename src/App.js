import React from "react";
import { Route, Switch, Link, NavLink, Redirect } from "react-router-dom";
import "./styles.css";
import Default from "./components/Default";
import Sample from "./components/Sample";
import Something from "./components/Something";
import NoMatch from "./components/NoMatch";

export default function App() {
  return (
    <div className="App">
      <div className="link-container">
        <NavLink activeClassName="active" exact to="/">
          Main
        </NavLink>
        <NavLink activeClassName="active" to="/sample">
          Sample
        </NavLink>
        <NavLink activeClassName="active" to="/something">
          Something
        </NavLink>
      </div>
      <main>
        <Switch>
          <Route path="/" exact component={Default} />
          <Route path="/sample" component={Sample} />
          <Route path="/something" component={Something} />
          <Route path='/default' render={() => <Redirect to="/" />} />
          <Route component={NoMatch} />
        </Switch>
      </main>
    </div>
  );
}
