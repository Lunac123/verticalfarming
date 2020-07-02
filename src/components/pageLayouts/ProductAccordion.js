import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class ProductAccordion extends Component {
  state = {
    productData: this.props.productData
  };

  render() {
    let { toggle, openNutrients, openDetailed, openDelivery } = this.props;
    let { productData } = this.state;
    console.log("openDetailed in component: " + openDetailed);
    console.log("openNutri in component: " + openNutrients);
    console.log("openDelivery in component: " + openDelivery);
    return (
      <section className="panel-wrapper">
        <div
          className={
            "panel-header " +
            // (productData.detailedDescription.showHide ? "open" : "")
            (openDetailed ? "open" : "")
          }
        >
          <a
            // id={productData.detailedDescription.target + productData.id}
            className="panel-clicker"
            onClick={() => toggle(productData.detailedDescription.target)}
          >
            Detailed Description
          </a>
        </div>
        <p
          className={
            "panel-text " +
            // (productData.detailedDescription.showHide ? "open" : "")
            (openDetailed ? "open" : "")
          }
        >
          {productData.detailedDescription.info}
        </p>

        <div
          className={
            // "panel-header " + (productData.nutrients.showHide ? "open" : "")
            "panel-header " + (openNutrients ? "open" : "")
          }
        >
          <a
            // id={productData.nutrients.target + productData.id}
            className="panel-clicker"
            onClick={() => toggle(productData.nutrients.target)}
          >
            Nutrient Info
          </a>
        </div>

        <p
          className={
            // "panel-text " + (productData.nutrients.showHide ? "open" : "")
            "panel-text " + (openNutrients ? "open" : "")
          }
        >
          {productData.nutrients.info}
        </p>

        <div
          className={
            // "panel-header " + (productData.delivery.showHide ? "open" : "")
            "panel-header " + (openDelivery ? "open" : "")
          }
        >
          <a
            // id={productData.delivery.target + productData.id}
            className="panel-clicker"
            onClick={() => toggle(productData.delivery.target)}
          >
            Shipping Info
          </a>
        </div>

        <p
          className={
            // "panel-text " + (productData.delivery.showHide ? "open" : "")
            "panel-text " + (openDelivery ? "open" : "")
          }
        >
          {productData.delivery.info}
        </p>
      </section>
    );
  }
}

export default ProductAccordion;
