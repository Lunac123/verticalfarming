import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggleNav = () => {
    // let { open } = this.state;
    this.setState({ open: !this.state.open });
  };

  handleClick = () => {
    this.setState({ open: false });
  };
  render() {
    let { open } = this.state;

    return (
      <header className="header">
        <div className="container">
          <Link onClick={() => this.handleClick()} to="/">
            <span className="logo">Vertical Farming</span>
          </Link>
        </div>
        <div
          onClick={this.toggleNav}
          className={open ? "nav-icon open" : "nav-icon closed"}
        ></div>
        <nav className={open ? "open" : "closed"}>
          <NavLink
            onClick={() => this.handleClick()}
            exact={true}
            activeClassName="active"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => this.handleClick()}
            activeClassName="active"
            to="/products"
          >
            Products
          </NavLink>
          <NavLink
            onClick={() => this.handleClick()}
            activeClassName="active"
            to="/aboutus"
          >
            About Us
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default navigation;
