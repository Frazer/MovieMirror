// @flow

import React, { Component } from "react";
import appText from "./appText";

import {
  Page,
  Grid,
  Button,
} from "tabler-react";


import SiteWrapper from "../SiteWrapper.react";

export class FilmPrimer extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      questionPageNumber: 1,
      answers: {}
    }
    this.recordAnswer = this.recordAnswer.bind(this);
    this.backClicked = this.backClicked.bind(this);
  }  

  backClicked(){
    this.setState(
      {
        questionPageNumber: this.state.questionPageNumber-1,
      })
  }
  recordAnswer(index){

    if(appText.en.questionPage[this.state.questionPageNumber+1]){
      this.setState(
        {
          questionPageNumber: this.state.questionPageNumber+1,
          answers: Object.assign({},this.state.answers,{[this.state.questionPageNumber]: index})
        })
      }else{
        console.log(Object.assign({},this.state.answers,{[this.state.questionPageNumber]: index}))
        this.props.history.push('/quessdtion-page', {state: {answers: this.state.answers}})
    }
  }
  render(){
    
    return (

        <Page.Content>
          <Grid.Row cards={true}>
            <Grid.Col lg={12}>
                  <h1>
                    {appText.en.questionPage[this.state.questionPageNumber].heading}
                  </h1>
                  <Button.List>
                  {appText.en.questionPage[this.state.questionPageNumber].answer.map((answer,i)=>(
                    <Button className="questionButton" block color="primary" RootComponent="a" key={i} onClick={()=>{this.recordAnswer(i)}}>
                      {answer}
                    </Button>
                  ))}
                  {this.state.questionPageNumber>1 &&
                    <Button block color="azure" RootComponent="a" onClick={this.backClicked}>
                      Back
                    </Button>
                  }
                  </Button.List>
            </Grid.Col>
          </Grid.Row>
        </Page.Content>
    );
  }
}

export default FilmPrimer;


