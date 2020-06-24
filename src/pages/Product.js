import React, { Component } from "react";
import TopImage from "../components/pageLayouts/TopImage";
import Divider from "../components/pageLayouts/Divider";
import axios from "axios";

class Products extends Component {
  render() {
    let { product } = this.props;
    console.log("prodct: " + JSON.stringify(product));
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Products;
