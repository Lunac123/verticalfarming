import React, { Component } from "react";
import TopImage from "../components/pageLayouts/TopImage";
import Divider from "../components/pageLayouts/Divider";
class Aboutus extends Component {
  render() {
    let setImage = "../src/img/topbanner-spices.jpg";
    return (
      <section>
        <TopImage image={setImage} />
        <Divider size="small" />
        <div className="about-us-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src="src/img/about-us.jpg" width="100%" />
              </div>
              <div className="col-6">
                <h1>About Us</h1>
                <p>
                  Velit laboris nisi voluptate aliquip et voluptate aute. Fugiat
                  eiusmod ea aliquip culpa. Laboris amet aliquip aliqua laboris
                  magna sint eu tempor anim. Eiusmod ipsum excepteur
                  exercitation dolor non occaecat proident reprehenderit nulla
                  quis aliqua ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Aboutus;
