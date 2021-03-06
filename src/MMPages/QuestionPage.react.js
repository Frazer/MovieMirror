// @flow

import React, { Component } from "react";
import appText from "./appText";

import {
  Page,
  Grid,
  Button,
} from "tabler-react";


import SiteWrapper from "../SiteWrapper.react";

export class QuestionPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      questionPageNumber: 1,
      answers: {}
    }
    this.recordAnswer = this.recordAnswer.bind(this);
    this.backClicked = this.backClicked.bind(this);
  }  

  componentWillMount(){
    
    if(this.props.location.state){
      this.goToFinal = true;
      this.questionPage = appText.en.questionAfterMoviePage;
    }else{
      this.questionPage = appText.en.questionPage
    }
    //this.recievedMessage = this.props.location.state.message;
  }
  backClicked(){
    this.setState(
      {
        questionPageNumber: this.state.questionPageNumber-1,
      })
  }
  recordAnswer(index){

    if(this.questionPage[this.state.questionPageNumber+1]){
      this.setState(
        {
          questionPageNumber: this.state.questionPageNumber+1,
          answers: Object.assign({},this.state.answers,{[this.state.questionPageNumber]: index})
        })
      }else{
        if(!this.goToFinal){
          this.props.history.push('/film-primer-page', {state: {answers: Object.assign({},this.state.answers,{[this.state.questionPageNumber]: index})}})
        }else{
          this.props.history.push('/final-page', {state: {answers: Object.assign({},this.state.answers,{[this.state.questionPageNumber]: index})}})
        }
    }
  }
  render(){
    
    return (
      <div class="wrapper">
        <Page.Content>
          <Grid.Row cards={true}>
            <Grid.Col lg={12}>
                  <h1>
                    {this.questionPage[this.state.questionPageNumber].heading}
                  </h1>
                  <Button.List>
                  {this.questionPage[this.state.questionPageNumber].answer.map((answer,i)=>(
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
      </div>
    );
  }
}

export default QuestionPage;


