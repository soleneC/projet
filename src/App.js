import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import './App.css';

import Navigation from './container/Navigation';
import WidgetGrid from './container/WidgetGrid';
import Admin from './container/Admin';
import Error from './component/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter className="App">
        <div>
          <Navigation />

          <Switch>
            <Route path = "/" component = {WidgetGrid} exact />
            <Route path = "/admin" component = {Admin} />
            <Route component = {Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
