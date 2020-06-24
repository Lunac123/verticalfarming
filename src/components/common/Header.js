import React, { Component } from "react";
import { Link } from "react-router-dom";

class navigation extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <span className="logo">Vertical Farming</span>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            {/* <Link to="/aboutus">About us</Link>
            <Link to="/contact">Contact us</Link> */}{" "}
            */}
          </nav>
        </div>
      </header>
    );
  }
}

export default navigation;
