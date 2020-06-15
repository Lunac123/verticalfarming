import React from "react";

function FindUsInfo() {
  return (
    <div>
      <h2 className="find-us-header">Find Us</h2>
      <div className="col-6 contact-adress-wrapper">
        <h4>Open Hours:</h4>
        <p>Mon-Fri: 09:00 - 16:00</p>
        <p>Saturday: 10:00 - 14:00</p>
      </div>
      <div className="col-6 contact-adress-wrapper">
        <h4>Adress: </h4>
        <p>Kyrkparken</p>
        <p>Behind the trees</p>
        <p>831 53 Östersund</p>
        <p>Phone: +46 63-555 555</p>
      </div>
      <div className="col-12 map-image"></div>
    </div>
  );
}

export default FindUsInfo;
