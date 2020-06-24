import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

// Product data in JSON format
import productData from "./productData";

// CSS styles
import "../sass/main.scss";

// Pages
import Home from "../pages/Home";
import Products from "../pages/Products";

//Components
import Header from "./common/Header";
import Footer from "./common/Footer";
import history from "./common/history";
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router history={history}>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home products={productData} {...props} />}
            />
            <Route
              path="/products"
              render={(props) => <Products products={productData} {...props} />}
            />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
