import React, { Component } from "react";
import { Link } from "react-router-dom";

class navigation extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <Link to="/">
            <span className="logo">Vertical Farming</span>
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/aboutus">About us</Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default navigation;
