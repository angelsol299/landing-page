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

class Php extends Component{
    render(){
        return(
            <div className="projects-grid" style={{marginTop: "40px"}}>
          {/*Project 1 */}
          <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125) center / cover"
              }}
            />
            <CardText>
              <b><span style={{fontSize:"20px", color:"#0099cc"}}>App: Under Development</span></b> <br />
              Technologies: under development
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
          <Card shadow={0} style={{ minWidth: "450", margin: "auto"}}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://cdn.intellipaat.com/mediaFiles/2014/11/PHP-MySQL-Training.jpg) center / cover"
              }}
            /> 
            <CardText>
              <b><span style={{fontSize:"20px", color:"#0099cc"}}>Journal</span></b><br />
              Technologies: PHP and MySQL.
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
          {/*Project 3 */}
          <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125) center / cover"
              }}
            />
            <CardText>
              <b><span style={{fontSize:"20px", color:"#0099cc"}}>App: Under Development</span></b> <br />
              Technologies: under development
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
          {/*Project 4 */}
          <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125) center / cover"
              }}
            />
            <CardText>
              <b><span style={{fontSize:"20px", color:"#0099cc"}}>App: Under Development</span></b> <br />
              Technologies: under development
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
          {/*Project 5 */}
          <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125) center / cover"
              }}
            />
            <CardText>
              <b><span style={{fontSize:"20px", color:"#0099cc"}}>App: Under Development</span></b> <br />
              Technologies: under development
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
          {/*Project 6 */}
          <Card shadow={0} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                width: "100%",
                background:
                  "url(https://i0.wp.com/wp.laravel-news.com/wp-content/uploads/2017/07/php-leader.png?resize=2200%2C1125) center / cover"
              }}
            />
            <CardText>
              <b><span style={{fontSize:"20px", color:"#0099cc"}}>App: Under Development</span></b> <br />
              Technologies: under development
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
        </div>
        )
    }
}

export default Php;