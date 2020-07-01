import React, { Component } from "react";
import { Link } from "react-router-dom";
class AboutUs extends Component {
  render() {
    return (
      <div className="container front-padding">
        <div className="row">
          <div className="col-6 about-image-wrapper">
            <img src="src/img/about-us.jpg" />
          </div>
          <div className="col-6 front-header">
            <h2 id="front-header">About us</h2>
            <p>
              Mollit id esse non laboris consequat adipisicing enim minim
              deserunt excepteur deserunt ipsum quis. Amet culpa officia id
              irure. Et amet pariatur aliqua nulla deserunt duis exercitation
              consectetur. Velit irure aliqua aute cupidatat dolor id
              exercitation duis aute anim in.
            </p>
            <Link to="/aboutus" className="read-more-button button">
              Read more
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
