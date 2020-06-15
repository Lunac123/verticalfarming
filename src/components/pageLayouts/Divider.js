import React, { Component } from "react";

class Divider extends Component {
  render() {
    let { title } = this.props;
    return (
      <div className="divider-front-page">
        {title ? <h2>{title}</h2> : <span>Social Media Icons</span>}
        {/* <span>{title ? title : "placeholder"}</span> */}
      </div>
    );
  }
}
export default Divider;
