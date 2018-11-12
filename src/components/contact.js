import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body" style={{ marginTop: "70px" }}>
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Angel Osoria</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "2em" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              qui excepturi exercitationem necessitatibus error aliquid
              accusantium, voluptatum sit quos explicabo repellendus, dicta
              perspiciatis vero odio atque enim officia facere in.
            </p>
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
