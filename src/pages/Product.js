import React, { Component } from "react";
import TopImage from "../components/pageLayouts/TopImage";
import Divider from "../components/pageLayouts/Divider";
import ProductAccordion from "../components/pageLayouts/ProductAccordion";
import ProductShowcase from "../components/pageLayouts/ProductShowcase";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
      products: this.props.products
    };
  }

  toggle = (details) => {
    let { product } = this.state;
    // e.preventDefault();

    if (product.detailedDescription.target === details) {
      product.detailedDescription.showHide = true;
      product.nutrients.showHide = false;
      product.delivery.showHide = false;
    } else if (product.nutrients.target === details) {
      product.detailedDescription.showHide = false;
      product.nutrients.showHide = true;
      product.delivery.showHide = false;
    } else if (product.delivery.target === details) {
      product.detailedDescription.showHide = false;
      product.nutrients.showHide = false;
      product.delivery.showHide = true;
    }
    this.setState({ product });
  };

  render() {
    let { product, products } = this.state;

    // console.log("prodct: " + JSON.stringify(product));
    // const baseUrl = "/product/";
    // const slug = props.match.params.slug;
    // console.log("slug : " + slug);
    let setBannerImage = "../src/img/verticalfarming.jpg";
    let setProductImage = "../" + product.img;
    return (
      <React.Fragment>
        <TopImage image={setBannerImage} />
        <Divider size="small" />
        <div className="single-product-wrapper container">
          <div className="row">
            <div className="col-6">
              <img src={setProductImage} width="100%" />
            </div>
            <div className="col-6">
              <h1>{product.title}</h1>
              <p>{product.longDescription}</p>
            </div>
          </div>
          <div className="row">
            <ProductAccordion productData={product} toggle={this.toggle} />
          </div>
        </div>
        <Divider size="large" title="Similar Products" />
        <ProductShowcase products={products} numberOfImages={3} />
      </React.Fragment>
    );
  }
}

export default Products;
