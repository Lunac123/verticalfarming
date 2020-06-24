import React, { Component } from "react";

class ProductShowcase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageId: 0,
      startId: 0,
      endOfSlice: 3,
      numberOfImages: this.props.numberOfImages,
      arrayLength: this.props.products.length,
      products: this.props.products
    };
  }

  next = () => {
    let {
      imageId,
      endOfSlice,
      numberOfImages,
      arrayLength,
      startId
    } = this.state;
    if (endOfSlice === arrayLength) {
      this.setState({ imageId: startId, endOfSlice: numberOfImages });
      console.log("the numbers last: " + imageId, endOfSlice);
    } else {
      this.setState({ imageId: imageId + 1, endOfSlice: endOfSlice + 1 });
      console.log("the numbers: " + imageId, endOfSlice);
    }
  };
  prev = () => {
    let { imageId, endOfSlice, numberOfImages, arrayLength } = this.state;
    if (imageId <= 0) {
      imageId = arrayLength - numberOfImages;

      this.setState({ imageId: imageId, endOfSlice: arrayLength });
      console.log("the numbers: " + imageId, endOfSlice);
    } else {
      this.setState({ imageId: imageId - 1, endOfSlice: endOfSlice - 1 });
      console.log("the numbers: " + imageId, endOfSlice);
    }
  };

  render() {
    let { imageId, endOfSlice, products } = this.state;

    let productComponents = products
      .slice(imageId, endOfSlice)
      .map((products) => {
        return (
          <div key={products.id} className="col-4">
            <h3>{products.title}</h3>
            <img src={products.img} width="100%" />
            <p>{products.description}</p>
          </div>
        );
      });

    return (
      <div className="container">
        <div className="row">
          <a className="prev-button" onClick={this.prev} />

          {productComponents}

          <a className="next-button" onClick={this.next} />
        </div>
      </div>
    );
  }
}

export default ProductShowcase;
