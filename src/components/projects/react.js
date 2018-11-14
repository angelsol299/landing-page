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

class Reactjs extends Component{
    render(){
        return(
            <div className="projects-grid" style={{marginTop: "20px"}}>
          {/*Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
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
          <Card shadow={5} style={{ minWidth: "450", margin: "auto"}}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://cdn-images-1.medium.com/max/1200/1*Ukhx76VQ8E6JXEW7xfIzSA.png) center / cover"
              }}
            /> 
            <CardText>
              <b>App: Tic Tac Toe Game</b><br />
              Technologies: React and Typescript.
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
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
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
              Technologies: React and Redux.
            </CardText>
            <CardActions border>
              <Button           href="https://github.com/angelsol299/React-redux-todoapp"
                 colored
                 target="_blank">Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LivedDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*project 4 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://cdn-images-1.medium.com/max/2000/1*ytMIcp6uu6UIZpApG1LFYg.png) center / cover"
              }}
            >
            </CardTitle>
            <CardText>
               <b>App: InstaLink</b><br />
              Technologies: React, Redux and Firebase.
            </CardText>
            <CardActions border>
              <Button 
                 href="https://github.com/angelsol299/instalink"
                colored
                target="_blank"
              >Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LivedDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*project 5 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://cdn-images-1.medium.com/max/2000/1*ytMIcp6uu6UIZpApG1LFYg.png) center / cover"
              }}
            >
            </CardTitle>
            <CardText>
               <b>App: InstaLink</b><br />
              Technologies: React, Redux and Firebase.
            </CardText>
            <CardActions border>
              <Button 
                 href="https://github.com/angelsol299/instalink"
                colored
                target="_blank"
              >Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LivedDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/*project 6 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://cdn-images-1.medium.com/max/2000/1*ytMIcp6uu6UIZpApG1LFYg.png) center / cover"
              }}
            >
            </CardTitle>
            <CardText>
               <b>App: InstaLink</b><br />
              Technologies: React, Redux and Firebase.
            </CardText>
            <CardActions border>
              <Button 
                 href="https://github.com/angelsol299/instalink"
                colored
                target="_blank"
              >Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LivedDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "black" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
        )
    }
}

export default Reactjs;