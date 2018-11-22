import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div style={{ marginTop: "108px", marginBottom: "60px" }}>
        <Grid>
          <Cell col={4} className="resume-left-col">
            <div style={{ textAlign: "center" }}>
              <img
                className="img-resume query-right"
                src="https://image.ibb.co/ixaOAA/myAvatar.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <h2 style={{ paddingTop: "0em" }} className="query-uno">
                Angel Osoria
              </h2>
              <h4 style={{ color: "grey" }} className="query-uno">
                Front End Developer
              </h4>
              <hr
                style={{ borderTop: "3px solid #1D343D", width: "100%" }}
                className="query-hr"
              />
              <p className="query-uno">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda cum tempore est esse explicabo sunt earum numquam?
                Ducimus, incidunt ipsa fuga maiores at sunt illum, accusantium
                omnis quae quidem dolores.
              </p>
              <hr
                className="query-hr"
                style={{ borderTop: "3px solid #1D343D", width: "100%" }}
              />
              <h5 className="query-uno">
                <b>Address</b>
              </h5>
              <p className="query-uno">Norra statationsgatan, Stockholm</p>
              <h5 className="query-uno">
                <b className="query-phone">Phone</b>
              </h5>
              <p className="query-uno">3314050542</p>
              <h5>
                <b className="query-uno">Email</b>
              </h5>
              <p className="query-uno">info@angelosoria.com</p>
              <h5 className="query-uno">
                <b>Web</b>
              </h5>
              <p className="query-uno">
                <i>www.angelosoria.com</i>
              </p>
              <hr
                className="query-hr-none"
                style={{
                  borderTop: "3px solid #1D343D",
                  width: "100%",
                  marginTop: "225px",
                  paddingTop: "-2000px"
                }}
              />
            </div>
          </Cell>
          <Cell className="resume-right-col" col={7}>
            <h2 className="resume-h2">Education</h2>
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
