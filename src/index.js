import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
//import './index.css';
import App from "./App";
import AboutUs from "./AboutUs";
// import Projects from "./Projects";
// import Members from "./Members";
// import Premium from "./Premium"
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventsList from "./components/EventsList";
import HangoutsList from "./components/HangoutsList";
import Navbar from "./components/Navbar";
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.Fragment>
        <Navbar />
        <div className={"pull-under-navbar"}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about-us" component={AboutUs} />
            {/* <Route path="/projects" component={Projects} />
            <Route path="/users" component={Members} />
            <Route path="/premium" component={Premium} /> */}
            <Route path="/events" component={EventsList} />
            <Route path="/hangouts" component={HangoutsList} />
            <Route path="/getting-started" component={EventsList} />
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
