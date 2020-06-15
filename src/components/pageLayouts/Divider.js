import React, { Component } from "react";
import SocialMediaButtons from "../elements/socialMediaButtons";
class Divider extends Component {
  render() {
    let { title, size } = this.props;

    // Check if the size is large or small
    // This way the Divider can be used with different css sizes and in different
    // ways without making more divider components
    let finalSize = "";
    if (size === "small") {
      finalSize = "divider-front-small";
    } else {
      finalSize = "divider-front-large";
    }
    return (
      <div className={finalSize}>
        <div className="container">
          {/* Check if there is a title from parent. If there is no title it will be used with social media icons. */}
          {title ? (
            <h2>{title}</h2>
          ) : (
            <span className="social-media-divider">
              <p>Follow us on Social Media</p>
              {/* Component for social media buttons so they can be used where ever needed on the site */}
              <SocialMediaButtons />
            </span>
          )}
        </div>
      </div>
    );
  }
}
export default Divider;
