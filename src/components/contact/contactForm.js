import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <h2>Contact me</h2>
        <label className="formLabel" htmlFor="">
          Name:
        </label>
        <input type="text" />
        <br />
        <br />
        <label className="formLabel" htmlFor="">
          Email:
        </label>
        <input type="text" />
        <br />
        <br />
        <label className="formLabel" htmlFor="">
          Phone:
        </label>
        <input type="text" />
        <br />
        <br />
        <label
          className="formLabel"
          htmlFor=""
          style={{ marginLeft: "-140px" }}
        >
          Content:
          <br />
        </label>
        <textarea name="" id="" cols="30" rows="10" />
        <br />
        <button style={{}}>Send</button>
      </div>
    );
  }
}

export default ContactForm;
