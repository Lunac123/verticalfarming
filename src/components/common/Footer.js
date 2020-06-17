import React, { Component } from "react";
import SocialMediaButtons from "../elements/socialMediaButtons";
export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-5">
              <p className="social-media-text">Follow us on social media</p>
              <SocialMediaButtons />
            </div>
            <div className="col-2">{/* <p>This is a footer</p> */}</div>
            <div className="col-5">
              <form>
                <div className="row">
                  <div className="col-12">
                    <label htmlFor="newsletter">Newsletter</label>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <input
                      id="newsletter"
                      name="newsletter"
                      type="text"
                    ></input>
                    <input type="submit" value="Submit" />
                  </div>
                </div>
              </form>
              <div className="row">
                <p className="copyright">&copy; Micke S</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
