import React, { Component } from "react";
import TopImage from "../components/pageLayouts/TopImage";
import Divider from "../components/pageLayouts/Divider";
import ProductAccordion from "../components/pageLayouts/ProductAccordion";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      product: this.props.product
    };
  }

  // toggle = (details) => {
  //   let { product } = this.state;
  //   // e.preventDefault();

  //   if (product.detailedDescription.target === details) {
  //     product.detailedDescription.showHide = true;
  //     product.nutrients.showHide = false;
  //     product.delivery.showHide = false;
  //   } else if (product.nutrients.target === details) {
  //     product.detailedDescription.showHide = false;
  //     product.nutrients.showHide = true;
  //     product.delivery.showHide = false;
  //   } else if (product.delivery.target === details) {
  //     product.detailedDescription.showHide = false;
  //     product.nutrients.showHide = false;
  //     product.delivery.showHide = true;
  //   }
  //   this.setState({ product });
  // };

  toggle = (e) => {
    // const id = e.target.id;
    console.log("id: " + e);
    this.setState({ visible: !this.state.visible });
  };
  render() {
    let { product } = this.state;

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
        <div className="container">
          <div className="row">
            <img src={setProductImage} width="100%" />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <ProductAccordion
              visible={this.state.visible}
              productData={product}
              toggle={this.toggle}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
