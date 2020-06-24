import React, { Component } from "react";
import TopImage from "../components/pageLayouts/TopImage";
class Aboutus extends Component {
  render() {
    let setImage = "../src/img/verticalfarming.jpg";
    return (
      <section>
        <TopImage image={setImage} />
        <div className="container">
          <div className="row">
            <h1>About Us</h1>
            <p>
              Velit laboris nisi voluptate aliquip et voluptate aute. Fugiat
              eiusmod ea aliquip culpa. Laboris amet aliquip aliqua laboris
              magna sint eu tempor anim. Eiusmod ipsum excepteur exercitation
              dolor non occaecat proident reprehenderit nulla quis aliqua ex.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Aboutus;
