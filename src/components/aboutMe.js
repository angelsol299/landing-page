import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Link } from "react-router-dom";

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
              {" "}
              <span className="full-text">
                I've studied management, entrepreneurship, economics and latelty
                <b> Front End Development.</b> I've discover my passion for
                technology since I was a teenagare but I've never developed a
                professional interest about it untill the past year. I decieded
                to go into <b> software development</b> when I wrote my{" "}
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#085078"
                  }}
                  to="https://bit.ly/2DfzzBL"
                >
                  <b>master thesis</b>
                </Link>{" "}
                in economics in 2017 about the relationship between automation
                and unemployement. Once I discovered that most jobs will be
                automated in the near future I decided it was time to start this
                excited journey and to be valuable in the job market for longer.
              </span>
            </p>
            <p
              style={{
                //width: "75%",
                margin: "auto",
                //paddingTop: "1em",
                fontSize: "30px"
              }}
            >
              {" "}
              <span className="short-text">
                I've studied management, entrepreneurship, economics and latelty
                <b> Front End Development.</b> I've discover my passion for
                technology since I was a teenagare but I've never developed a
                professional interest about it untill the past year.
              </span>
              <br />
              <br />
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
