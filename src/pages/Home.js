import React, { Component } from "react";
import Divider from "../components/pageLayouts/Divider";
import AboutUs from "../components/pageLayouts/AboutUs";
import ProductShowcase from "../components/pageLayouts/ProductShowcase";
import FrontPageSlider from "../components/pageLayouts/FrontPageSlider";
import ContactLayout from "../components/pageLayouts/ContactLayout";
export class Home extends Component {
  render() {
    let { products } = this.props;

    return (
      <div>
        <FrontPageSlider />
        <Divider size="small" />
        <AboutUs />
        <Divider size="large" title="Products" />
        <ProductShowcase products={products} numberOfImages={3} />
        <Divider size="large" title="Contact" />
        <ContactLayout />
      </div>
    );
  }
}

export default Home;
