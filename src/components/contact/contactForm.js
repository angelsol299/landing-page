import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <h2 className="h2-contact">Contact me</h2>
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
        <input
          type="text"
          className="contactInput"
          style={{ marginLeft: "-6px" }}
        />
        <br />
        <br />
        <label className="formLabel1" htmlFor="">
          Content:
          <br />
        </label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="textArea1"
          style={{
            marginTop: "7px",
            border: "1.5px solid #26AEDF",
            borderRadius: "8px",
            padding: "0 105px"
          }}
        />
        <br />
        <br />
        <button
          style={{
            padding: "10px 65px",
            borderRadius: "5px",
            backgroundColor: "#26AEDF",
            color: "white",
            fontSize: "17px"
          }}
        >
          Send
        </button>
      </div>
    );
  }
}

export default ContactForm;
