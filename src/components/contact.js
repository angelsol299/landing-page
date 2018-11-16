import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

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
          <button href="#contact" class="btn">
            Contact me
          </button>
        </div>
        <Grid className="contact-grid" id="contact">
          <Cell col={6}>
            <div class="cognito" />
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "25px",
                      fontFamily: "Anton"
                    }}
                  >
                    {" "}
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    3314050542
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    {" "}
                    <i className="fa fa-envelope-square" aria-hidden="true" />
                    info@angelosoria.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    {" "}
                    <i className="fa fa-twitter-square" aria-hidden="true" />
                    @angelsol299
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
