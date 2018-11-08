import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Front End Developer</h1>
              <hr />
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
