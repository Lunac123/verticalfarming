import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";

// Product data in JSON format
import productData from "./productData";

// CSS styles
import "../sass/main.scss";

// Pages
import Home from "../pages/Home";
import Products from "../pages/Products";
import Product from "../pages/Product";
import AboutUs from "../pages/Aboutus";

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
            {/* the :slug is for sending data with URL's */}
            <Route
              path="/product/:slug"
              render={({ match }) => {
                const product = productData.find(
                  (data) => data.slug === match.params.slug
                );
                return <Product product={product} />;
              }}
              // render={(props) => <Product products={productData} {...props} />}
            />
            <Route path="/aboutus" render={() => <AboutUs />} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
