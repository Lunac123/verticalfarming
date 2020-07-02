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
      products: this.props.products,
      openDetailed: false,
      openNutrients: false,
      openDelivery: false
    };
  }

  toggle = (target) => {
    let { product, openDelivery, openDetailed, openNutrients } = this.state;

    if (product.detailedDescription.target === target) {
      this.setState({ openDetailed: !this.state.openDetailed });
      this.setState({ openNutrients: false });
      this.setState({ openDelivery: false });
    } else if (product.nutrients.target === target) {
      this.setState({ openDetailed: false });
      this.setState({ openNutrients: !this.state.openNutrients });
      this.setState({ openDelivery: false });
    } else if (product.delivery.target === target) {
      this.setState({ openDetailed: false });
      this.setState({ openNutrients: false });
      this.setState({ openDelivery: !this.state.openDelivery });
    }
  };

  render() {
    let {
      product,
      products,
      openDelivery,
      openDetailed,
      openNutrients
    } = this.state;
    console.log("openDetailed in render : " + openDetailed);
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
            <ProductAccordion
              productData={product}
              toggle={this.toggle}
              openDetailed={openDetailed}
              openNutrients={openNutrients}
              openDelivery={openDelivery}
            />
          </div>
        </div>
        <Divider size="large" title="Similar Products" />
        <ProductShowcase products={products} numberOfImages={3} />
      </React.Fragment>
    );
  }
}

export default Products;
