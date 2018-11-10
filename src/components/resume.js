import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/data/512x512/2015/09/24/106420_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
              <h2 style={{ paddingTop: "2em" }}>Angel Osoria</h2>
              <h4 style={{ color: "grey" }}>Front End Developer</h4>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus illum iste, recusandae, facilis obcaecati iusto
                numquam quo culpa incidunt vel nostrum quam eligendi! Eligendi
                aperiam quia aspernatur enim suscipit error.
              </p>
              <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            Right side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
