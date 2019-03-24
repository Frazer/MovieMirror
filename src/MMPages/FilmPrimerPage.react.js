// @flow

import React, { Component } from "react";
import appText from "./appText";

import {
  Page,
  Grid,
  Button,
} from "tabler-react";


import SiteWrapper from "../SiteWrapper.react";

export class FilmPrimerPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ready: false
    }
  }  

  watchFilm(){
    this.props.history.push('/watch-film-page', {state: {film: "abc"}})
  }
  componentDidMount(){
    setTimeout(()=>{this.setState({ready:true})},2000);
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
                <>
                  <h1>
                    {appText.en.DisclaimerHeading1}
                  </h1>
                  <h1>
                    {appText.en.DisclaimerHeading2}
                  </h1>
                  <h1>
                    {appText.en.DisclaimerBody}
                  </h1>
                </>
                :
                <>
                  <h1>{appText.en.MoviePageHeader1}</h1>
                  <div class="wrapper">
                    <h1>{appText.en.MoviePageHeader2}</h1>
                    <img src="/prettyWoman.jpg"/>
                    <h1>{appText.en.MoviePageBody}</h1>
                    <Button className="questionButton" block color="primary" RootComponent="a" onClick={()=>{this.watchFilm()}}>
                      {appText.en.MoviePageButton}
                    </Button>
                  </div>
                  <h1>{appText.en.MoviePageFooter}</h1>
                </>
              }
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </div>
    );
  }
}

export default FilmPrimerPage;


