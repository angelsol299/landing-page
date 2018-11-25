import React, { Component } from "react";
import { List, ListItem, ListItemContent } from "react-mdl";

class GetInTouch extends Component {
  render() {
    return (
      <div>
        <h2 className="h2InTouch" style={{ marginLeft: "20px" }}>
          Get in touch
        </h2>
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
                <i className="fa fa-phone-square icon" aria-hidden="true" />
                <span className="contact-span">3314050542</span>
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent
                style={{ fontSize: "25px", fontFamily: "Anton" }}
              >
                {" "}
                <i className="fa fa-envelope-square icon" aria-hidden="true" />
                <span className="contact-span">info@angelosoria.com</span>
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent
                style={{ fontSize: "25px", fontFamily: "Anton" }}
              >
                {" "}
                <a
                  href="https://twitter.com/angelsol299"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter-square icon" aria-hidden="true" />
                </a>
                <span className="contact-span">@angelsol299</span>
              </ListItemContent>
            </ListItem>

            <ListItem>
              <ListItemContent
                style={{ fontSize: "25px", fontFamily: "Anton" }}
              >
                {" "}
                <i className="fa fa-youtube-square icon" aria-hidden="true" />
                <span className="contact-span">@angelsol299</span>
              </ListItemContent>
            </ListItem>
          </List>
        </div>
      </div>
    );
  }
}

export default GetInTouch;
