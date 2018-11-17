import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import { Link } from "react-router-dom";

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
              <div class="cognito" />
            </Cell>
            <Cell col={6}>
              <h2>Get in touch</h2>
              <div className="contact-list" style={{ marginLeft: "105px" }}>
                <List>
                  <ListItem>
                    <ListItemContent
                      style={{
                        fontSize: "25px",
                        fontFamily: "Anton"
                      }}
                    >
                      {" "}
                      <i
                        className="fa fa-phone-square icon"
                        aria-hidden="true"
                      />
                      <span className="contact-span">3314050542</span>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "25px", fontFamily: "Anton" }}
                    >
                      {" "}
                      <i
                        className="fa fa-envelope-square icon"
                        aria-hidden="true"
                      />
                      <span className="contact-text">info@angelosoria.com</span>
                    </ListItemContent>
                  </ListItem>

                  <ListItem>
                    <ListItemContent
                      style={{ fontSize: "25px", fontFamily: "Anton" }}
                    >
                      {" "}
                      <i
                        className="fa fa-twitter-square icon"
                        aria-hidden="true"
                      />
                      @angelsol299
                    </ListItemContent>
                  </ListItem>
                </List>
              </div>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Contact;
