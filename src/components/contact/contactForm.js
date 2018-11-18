import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <h2>Contact me</h2>
        <br />
        <label className="formLabel" htmlFor="">
          Name:
        </label>
        <input type="text" className="contactInput" />
        <br />
        <br />
        <label className="formLabel" htmlFor="">
          Email:
        </label>
        <input type="text" className="contactInput" />
        <br />
        <br />
        <label className="formLabel" htmlFor="">
          Phone:
        </label>
        <input type="text" className="contactInput" />
        <br />
        <br />
        <label
          className="formLabel"
          htmlFor=""
          style={{ marginLeft: "-185px" }}
        >
          Content:
          <br />
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          style={{
            border: "1.5px solid #26AEDF",
            borderRadius: "8px",
            padding: "0 25px"
          }}
        />
        <br />
        <button
          style={{
            padding: "8px 35px",
            borderRadius: "5px",
            backgroundColor: "#26AEDF",
            color: "white"
          }}
        >
          Send
        </button>
      </div>
    );
  }
}

export default ContactForm;
