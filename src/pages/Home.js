import React, { Component } from "react";
import Divider from "../components/pageLayouts/Divider";
import FrontPageSlider from "../components/pageLayouts/FrontPageSlider";
export class Home extends Component {
  render() {
    let { products } = this.props;

    return (
      <div className="container">
        <FrontPageSlider />
        <Divider size="small" />

        <Divider size="large" title="Products" />
        <Divider size="large" title="Contact" />
      </div>
    );
  }
}

export default Home;
