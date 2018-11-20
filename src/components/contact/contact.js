import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import GetInTouch from "./getInTouch";
import ContactForm from "./contactForm";

// import { Link } from "react-router-dom";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body" style={{ marginTop: "30px" }}>
        <div class="container">
          <img
            src="https://wallpapertag.com/wallpaper/full/7/1/f/248315-gorgerous-coding-background-1920x1080.jpg"
            alt="Snow"
            style={{ width: "100%" }}
          />
          <button className="btn">
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact me
            </a>
          </button>
        </div>
        <div id="contact">
          <br />
          <br />
          <Grid className="contact-grid">
            <Cell col={6}>
              <ContactForm />
            </Cell>
            <Cell col={6}>
              <GetInTouch />
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;
