import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import Reactjs from "./react";
import Php from "./php";
import Firebase from "./firebase";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return <Reactjs />;
    } else if (this.state.activeTab === 1) {
      return <Php />;
    } else if (this.state.activeTab === 2) {
      return <Firebase />;
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1 style={{ color: "red" }}>Under construction</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs" style={{ marginTop: "60px" }}>
        <Tabs
          style={{ backgroundColor: "white" }}
          className="tabs-bar"
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>PHP</Tab>
          <Tab>Firebase</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()} </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
