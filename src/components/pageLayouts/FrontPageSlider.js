import React, { Component } from "react";
import sliderImages from "../sliderImages";

export class FrontPageSlider extends Component {
  state = {
    sliderImages: sliderImages,
    currentSlide: 0,
    slideStartNumber: 0
  };

  // Function to check how big the array is
  arrayLength = () => {
    let { sliderImages } = this.state;
    const lengthOfArray = sliderImages.length;
    return lengthOfArray;
  };

  // Function for the previous button. changes the currentSlide to -1
  prevSlide = () => {
    let { currentSlide, slideStartNumber } = this.state;

    if (currentSlide === slideStartNumber) {
      this.setState({ currentSlide: this.arrayLength() - 1 });
    } else {
      this.setState({ currentSlide: currentSlide - 1 });
    }
  };

  // Function for the next button. changes the currentSlide to +1
  nextSlide = () => {
    let { currentSlide, slideStartNumber } = this.state;
    // console.log("next button");
    if (currentSlide >= this.arrayLength() - 1) {
      this.setState({ currentSlide: slideStartNumber });
    } else {
      this.setState({ currentSlide: currentSlide + 1 });
    }
  };

  render() {
    let { sliderImages, currentSlide } = this.state;

    return (
      <section className="slider-wrapper">
        <a onClick={this.prevSlide} className="prev-button" />
        <div
          style={{ backgroundImage: `url(${sliderImages[currentSlide].img})` }}
          className="slider-image"
        ></div>
        <div className="container">
          <div className="row">
            <p className="slider-text">{sliderImages[currentSlide].body}</p>
          </div>
        </div>
        <a onClick={this.nextSlide} className="next-button" />
      </section>
    );
  }
}

export default FrontPageSlider;
