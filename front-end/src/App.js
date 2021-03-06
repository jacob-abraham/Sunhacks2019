import React, { Fragment } from "react";
import Landing from "./components/layout/Landing";
import NavBar from "./components/layout/NavBar";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Search from "./components/search/Search";
import About from "./components/about/About";
import Footer from "./components/layout/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

/** View Read.me for Project information! **/
/** Main class of the application, handles react-router logic and component organization **/
function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/about" component={About} />
          </Switch>
        </section>
        <Footer />
      </Fragment>
    </Router>
  );
}

export default App;
