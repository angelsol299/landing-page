import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

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
            </div>
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
            <h5>Address</h5>
            <p>Norra statationsgatan, Stockholm</p>
            <h5>Phone</h5>
            <p>3314050542</p>
            <h5>Email</h5>
            <p>info@angelosoria.com</p>
            <h5>Web</h5>
            <p>www.angelosoria.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2019}
              schoolName={"Nackademin"}
              schoolDescription={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus illum iste, recusandae, facilis obcaecati iusto"
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2018}
              jobName={"Front End Developer Intern"}
              jobDescription={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus illum iste, recusandae, facilis obcaecati iusto"
              }
            />
            <Experience
              startYear={2018}
              endYear={2018}
              jobName={"Front End Developer Intern"}
              jobDescription={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit Repellendus illum iste, recusandae, facilis obcaecati iusto"
              }
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="JavaScript" progress={100} />
            <Skills skill="React JS" progress={80} />
            <Skills skill="HTML" progress={80} />
            <Skills skill="CSS" progress={80} />
            <Skills skill="Node JS" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
