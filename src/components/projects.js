import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  CardText,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid" style={{marginTop: "40px"}}>
          {/*Project 1 */}
          <Card shadow={5} style={{ minWith: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://miro.medium.com/max/838/1*m_q0YKyWw7Qqbh-qklinTw.png) center / cover"
              }}
            />
            <CardText>
              <b>App: Poketimes</b> <br />
              Technologies: React and redux
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/angelsol299/react-redux-poketimes"
                colored
                target="_blank"
              >
                Github
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>LivedDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*project 2 */}
          <Card shadow={5} style={{ minWith: "450", margin: "auto"}}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://spin.atomicobject.com/wp-content/uploads/20171005133008/React-Typescript.png) center / cover"
              }}
            /> 
            <CardText>
              <b>App: Tic Tac Toe Game</b><br />
              Technologies: React and typescript.
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/angelsol299/tictactoeapp"
                colored
                target="_blank"
              >
                Github
              </Button>
              <Button colored>CodePen</Button>
              <Button colored>LivedDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*project 3 */}
          <Card shadow={5} style={{ minWith: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://miro.medium.com/max/838/1*m_q0YKyWw7Qqbh-qklinTw.png) center / cover"
              }}
            >
            </CardTitle>
            <CardText>
               <b>App: Todo App</b><br />
              Technologies: React and typescript.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LivedDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is PHP</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Vue JS</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is Mongo DB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs" style={{ marginTop: "60px" }}>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>PHP</Tab>
          <Tab>VueJS</Tab>
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
