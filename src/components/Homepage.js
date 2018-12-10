import React, { Component, Fragment } from "react";
import { Modal, Grid, Button, Image, Icon } from "semantic-ui-react";
import HomepageModal from './HomepageModal'
import "./../Homepage.css";
import modals from "../modals";

export class Homepage extends Component {

  renderModals() {
    return modals.map((modal, id) => {
      return (
        <HomepageModal key={id} modal={modal} />
      );
    });
  };

  render() {
    return (
      <Fragment>
        <Grid columns={16} stretched className="landing-page-background">
          <Grid.Row style={{ height: '500px' }}>
          </Grid.Row>
          {this.renderModals()}
          <Grid.Row style={{ height: '320px' }}>
          </Grid.Row>
        </Grid>
      </Fragment>
    );
  }
}

export default Homepage;
