import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div style={{ marginTop: "70px" }}>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                className="img-resume"
                src="https://image.ibb.co/ixaOAA/myAvatar.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ paddingTop: "0em" }}>Angel Osoria</h2>
              <h4 style={{ color: "grey" }}>Front End Developer</h4>
              <hr style={{ borderTop: "3px solid #1D343D", width: "100%" }} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda cum tempore est esse explicabo sunt earum numquam?
                Ducimus, incidunt ipsa fuga maiores at sunt illum, accusantium
                omnis quae quidem dolores.
              </p>
              <hr style={{ borderTop: "3px solid #1D343D", width: "100%" }} />
              <h5>
                <b>Address</b>
              </h5>
              <p>Norra statationsgatan, Stockholm</p>
              <h5>
                <b>Phone</b>
              </h5>
              <p>3314050542</p>
              <h5>
                <b>Email</b>
              </h5>
              <p>info@angelosoria.com</p>
              <h5>
                <b>Web</b>
              </h5>
              <p>
                <i>www.angelosoria.com</i>
              </p>

              <hr style={{ borderTop: "3px solid #1D343D", width: "100%" }} />
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2017}
              endYear={2019}
              schoolName={"Nackademin"}
              schoolDescription={
                "A 2 years Front End Developer degree with focus on JavaScript(Vanilla and React JS), HTML5, CSS5(SASS and LESS), PHP, MySQL and CMS."
              }
            />
            <hr style={{ borderTop: "3px solid #fff" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2018}
              jobName={"ICA Banken"}
              jobDescription={
                "I had worked at ICA Banken for 3 month  as a front end developer intern implementing react JS and typesrcipt."
              }
            />
            <hr style={{ borderTop: "3px solid #fff" }} />
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
