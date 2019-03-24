// @flow

import React, { Component } from "react";
import appText from "./appText";

import {
  Page,
  Grid,
  Button,
} from "tabler-react";


import SiteWrapper from "../SiteWrapper.react";

export class WatchFilmPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ready: false
    }
    this.selfQuestions = this.selfQuestions.bind(this);
  }  

  selfQuestions(){
    this.props.history.push('/question-page', {state: {afterFilm: true}})
  }
  componentDidMount(){
    setTimeout(()=>{this.setState({ready:true})},60000);
    this.recievedMessage = this.props.location.state.message;
    console.log(this.recievedMessage);
  }
  render(){
    
    return (
      <div class="wrapper">
        <Page.Content>
          <Grid.Row cards={true}>
            <Grid.Col lg={12}>
              {!this.state.ready?
                <div className="video-container">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/8TX-TnncweQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                :
                <>
                  <h1>{appText.en.AfterMoviePageHeader1}</h1>
                  <h1>{appText.en.AfterMoviePageHeader2}</h1>

                  <Button.List>
                      <Button block color="azure" RootComponent="a" onClick={this.selfQuestions}>
                        {appText.en.AfterMoviebutton1}
                      </Button>
                      <Button block color="azure" RootComponent="a" onClick={()=>{}}>
                        {appText.en.AfterMoviebutton2}
                      </Button>
                      <Button block color="azure" RootComponent="a" onClick={()=>{}}>
                        {appText.en.AfterMoviebutton3}
                      </Button>
                  </Button.List>
                </>
              }
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </div>
    );
  }
}

export default WatchFilmPage;


