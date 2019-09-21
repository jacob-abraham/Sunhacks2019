import React, { Fragment } from "react";
import Landing from "./components/layout/Landing";
import NavBar from "./components/layout/NavBar";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//import Links from "./components/AxiosCalls/Links";

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/search" component={Search} />
            {
              //<Route exact path="/try" component={Links} />
            }
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
}

export default App;
