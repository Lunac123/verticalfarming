import React, { Component } from "react";

class AllProducts extends Component {
  render() {
    let { products } = this.props;
    let allProducts = products.map((product) => {
      return (
        <div key={product.id} className="col-3">
          <h3>{product.title}</h3>
          <img src={product.img} width="100%" />
          <p>{product.description}</p>
        </div>
      );
    });
    return <div className="row">{allProducts}</div>;
  }
}

export default AllProducts;
