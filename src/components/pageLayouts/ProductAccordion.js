import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class ProductAccordion extends Component {
  state = {
    productData: this.props.productData
  };

  render() {
    let { toggle } = this.props;
    let { productData } = this.state;

    return (
      <section className="panel-wrapper">
        <div className="panel-header">
          <a
            id={productData.detailedDescription.target + productData.id}
            className="panel-clicker"
            onClick={() => toggle(productData.detailedDescription.target)}
          >
            Detailed Description
          </a>
        </div>
        <p
          className={
            "panel-text " +
            (productData.detailedDescription.showHide ? "open" : "")
          }
        >
          {productData.detailedDescription.info}
        </p>

        <div className="panel-header">
          <a
            id={productData.nutrients.target + productData.id}
            className="panel-clicker"
            onClick={() => toggle(productData.nutrients.target)}
          >
            Nutrient Info
          </a>
        </div>

        <p
          className={
            "panel-text " + (productData.nutrients.showHide ? "open" : "")
          }
        >
          {productData.nutrients.info}
        </p>

        <div className="panel-header">
          <a
            id={productData.delivery.target + productData.id}
            className="panel-clicker"
            onClick={() => toggle(productData.delivery.target)}
          >
            Shipping Info
          </a>
        </div>

        <p
          className={
            "panel-text " + (productData.delivery.showHide ? "open" : "")
          }
        >
          {productData.delivery.info}
        </p>
      </section>
    );
  }
}

export default ProductAccordion;
