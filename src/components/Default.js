import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

export default () => {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/sample" } };
  const redirect = () => {
    history.replace(from);
  }

  window.setTimeout(redirect, 5000)


  return <div>This is the Default Index component route</div>;
};
