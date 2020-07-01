import React, { Component } from "react";

class AllProducts extends Component {
  render() {
    let { products } = this.props;

    // Maps through all the products in the JSON data that is
    // sent through as a prop from the parent.
    let allProducts = products.map((product) => {
      let productLink = "/product/" + product.slug;
      return (
        // `url(${item.imageLink})`
        <a key={product.id} href={productLink}>
          <div className="col-4">
            <h5>{product.title}</h5>
            <img src={product.img} width="100%" />
            <p>{product.description}</p>
          </div>
        </a>
      );
    });
    return <div className="row">{allProducts}</div>;
  }
}

export default AllProducts;
