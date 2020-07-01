import React, { Component } from "react";
import TopImage from "../components/pageLayouts/TopImage";
import Divider from "../components/pageLayouts/Divider";
import AllProducts from "../components/pageLayouts/AllProducts";
class Products extends Component {
  render() {
    let { products } = this.props;
    let setImage = "../src/img/topbanner-greens.jpg";
    return (
      <React.Fragment>
        <TopImage image={setImage} />
        <Divider size="small" />
        <div className="multi-product-wrapper">
          <div className="container">
            <div className="row">
              <h1>Products</h1>
              <p>
                Tempor esse mollit amet veniam excepteur anim est non Lorem
                tempor nostrud veniam excepteur. Enim deserunt elit excepteur
                consectetur laborum est reprehenderit eiusmod aliquip
                adipisicing pariatur excepteur eu dolore.
              </p>
            </div>
            <AllProducts products={products} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
