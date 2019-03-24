// @flow

import React, { Component } from "react";
import appText from "./appText";

import {
  Page,
  Grid,
  Button,
} from "tabler-react";


import SiteWrapper from "../SiteWrapper.react";

export class FinalPage extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      ready: false
    }
  }  

  render(){
    
    return (
      <div class="wrapper">
        <Page.Content>
          <Grid.Row cards={true}>
            <Grid.Col lg={12}>
              
                  <h1>{appText.en.finalPageHeader1}</h1>
                  
                  <Button.List>
                      <Button block color="azure" RootComponent="a" onClick={()=>{}}>
                        {appText.en.finalPagebutton1}
                      </Button>
                      <Button block color="azure" RootComponent="a" onClick={()=>{}}>
                        {appText.en.finalPagebutton2}
                      </Button>
                  </Button.List>

            </Grid.Col>
          </Grid.Row>
        </Page.Content>
      </div>
    );
  }
}

export default FinalPage;


