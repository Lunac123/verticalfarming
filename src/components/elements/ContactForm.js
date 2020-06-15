import React from "react";

function ContactForm() {
  return (
    <div>
      <h2 className="contact-header">Contact Us</h2>
      <form>
        <input type="text" placeholder="Name"></input>

        <input type="text" placeholder="Email"></input>

        <input type="text" placeholder="Subject"></input>

        <textarea placeholder="Message" id="message"></textarea>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
export default ContactForm;
