import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://karmabot.chat/public/images/avatars/boss-tom.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Front End Developer</h1>
              <hr />
              <p>
                HTML | CSS | Boostrap | JavaScript | React JS | Redux | NodeJS |
                Firebase |Typescript
              </p>
              <div className="social-links">
                {/* Linkedin*/}
                <a
                  href="https://www.linkedin.com/in/angel-osoria-00a00332/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github*/}
                <a
                  href="https://github.com/angelsol299"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* FreeCodeCamp*/}
                <a
                  href="http://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
