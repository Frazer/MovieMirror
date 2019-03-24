// @flow

import * as React from "react";
import appText from "./appText";

import {
  Page,
  Grid,
  Button,
} from "tabler-react";

import C3Chart from "react-c3js";

import SiteWrapper from "../SiteWrapper.react";

function Home() {
  return (
      <Page.Content>
        <Grid.Row cards={true}>
          <Grid.Col lg={12}>
            <h1>
              {appText.en.welcomeBodyLine1}
            </h1>
            <img width="100%"
                alt="Movie Mirror"
                src="/welcome.png"
              />
                <h1>
                  {appText.en.welcomeBodyLine1}
                </h1>
                <h1>
                  {appText.en.welcomeBodyLine2}
                </h1>
                <Button color="primary" RootComponent="a" href="/question-page">
                  {appText.en.welcomeButton}
                </Button>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    
  );
}

export default Home;
