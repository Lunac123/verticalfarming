import React, { Component } from "react";

class TopImage extends Component {
  render() {
    let { image } = this.props;
    return (
      <React.Fragment>
        <section>
          <div
            className="top-image"
            style={{
              backgroundImage: `url(${image})`
            }}
          ></div>
        </section>
      </React.Fragment>
    );
  }
}

export default TopImage;
