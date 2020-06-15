import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

// Product data in JSON format
import productData from "./productData";

// CSS styles
import "../sass/main.scss";

// Pages
import Home from "../pages/Home";

//Components
import Header from "./common/Header";

import history from "./common/history";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Header />
          <Switch>
            <Route
              path="/"
              render={(props) => <Home products={productData} {...props} />}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
