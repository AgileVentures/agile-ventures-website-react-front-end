import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
//import './index.css';
import Homepage from "./components/Homepage";
import AboutUs from "./AboutUs";
// import Projects from "./Projects";
// import Members from "./Members";
// import Premium from "./Premium"
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventsList from "./components/EventsList";
import HangoutsList from "./components/HangoutsList";
import ThemingLayout from "./components/ThemingLayout";
import Navbar from "./components/Navbar";
import "./assets/semantic.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.Fragment>
        <Navbar />
        <div className="pull-under-navbar">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about-us" component={AboutUs} />
            <Route path="/events" component={EventsList} />
            <Route path="/hangouts" component={HangoutsList} />
            <Route path="/getting-started" component={EventsList} />
            <Route path="/demo" component={ThemingLayout} />
          </Switch>
        </div>
      </React.Fragment>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
