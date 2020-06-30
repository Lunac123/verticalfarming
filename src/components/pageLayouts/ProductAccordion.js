import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

class ProductAccordion extends Component {
  render() {
    let { productData, toggle, visible } = this.props;
    console.log(
      "what is true and false: " + productData.detailedDescription.showHide,
      productData.nutrients.showHide,
      productData.delivery.showHide
    );
    console.log("open : " + visible);
    console.log("type on visible : " + typeof visible);
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
        <CSSTransition in={visible} classNames="accord" timout={300}>
          <p className="panel-text">{productData.detailedDescription.info}</p>
        </CSSTransition>
        <div className="panel-header">
          <a
            id={productData.nutrients.target + productData.id}
            className="panel-clicker"
            onClick={() => toggle(productData.nutrients.target)}
          >
            Nutrient Info
          </a>
        </div>
        {/* '        <CSSTransition in={visible} className="panel" timout={300}>
          {this.props.visible ? (
            <p className="panel-text">{productData.nutrients.info}</p>
          ) : null}
        </CSSTransition> */}
        '
        <div className="panel-header">
          <a
            id={productData.delivery.target + productData.id}
            className="panel-clicker"
            onClick={() => toggle(productData.delivery.target)}
          >
            Shipping Info
          </a>
        </div>
        {/* <CSSTransition in={visible} className="panel" timout={300}>
          {this.props.visible ? (
            <p className="panel-text">{productData.delivery.info}</p>
          ) : null}
        </CSSTransition> */}
      </section>
    );
  }
}

export default ProductAccordion;
