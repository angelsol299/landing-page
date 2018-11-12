import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="contact-body" style={{ marginTop: "70px" }}>
        <Grid className="contact-grid">
          <Cell col={10}>
            <h2>Hi, I am Angel</h2>
            <p
              style={{
                //width: "75%",
                margin: "auto",
                paddingTop: "1em",
                fontSize: "30px"
              }}
            >
              I've studied management, entrepreneurship, economics and latelty
              Front End Development. I've discover my passion for technology
              since I was a teenagare but I've never developed a professional
              interest about it untill the past year. I decieded to go into
              software development when I wrote my master thesis in economics in
              2017 about the relationship between automation and unemployement
              and once I discovered that most jobs will be automated in the near
              future.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
