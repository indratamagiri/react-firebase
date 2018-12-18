import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/Auth';

import { Provider } from 'react-redux';
import store from './store'; 

import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";
import AddClient from "./components/clients/AddClient";
import ClientDetail from "./components/clients/ClientDetail";
import EditClient from "./components/clients/EditClient";
import Chart from "./components/clients/Chart";
import Login from "./components/auth/Login";
import Spinner from "./components/layout/Spinner";
//import Setting from "./components/setting/Setting";

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="">
            <AppNavbar></AppNavbar>
            <div className="container">
              <Switch>
                <Route exact path="/" component={UserIsAuthenticated(Dashboard)}/>
                <Route exact path="/client/add" component={UserIsAuthenticated(AddClient)}/>
                <Route exact path="/client/:id" component={UserIsAuthenticated(ClientDetail)}/>
                <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)}/>
                <Route exact path="/chart" component={UserIsAuthenticated(Chart)}/>
                <Route exact path="/login" component={UserIsNotAuthenticated(Login)}/>
                <Route exact path="/login/loading" component={UserIsNotAuthenticated(Spinner)}/>
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
