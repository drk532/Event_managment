import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';

import Login from "./componenets/login";
import SignUp from "./componenets/signup";
import Event from "./componenets/evnts";
import Event_Register from './componenets/event_registration.js';
function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <h1 className="navbar-brand" to={"/sign-in"}>Titans</h1>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/events"}>Events</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth1">
        <div className="auth2">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/events" component={Event}/>
            <Route path="/event_registration.js" component={Event_Register}/>
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;