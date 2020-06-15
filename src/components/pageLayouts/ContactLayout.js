import React, { Component } from "react";
import ContactForm from "../elements/ContactForm";
import FindUsInfo from "../elements/FindUsInfo";
class ContactLayout extends Component {
  render() {
    return (
      <div className="contact-info">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ContactForm />
            </div>
            <div className="col-6">
              <FindUsInfo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactLayout;
