import React, { Component, Fragment } from "react";
import { Modal, Grid, Button, Image, Icon } from "semantic-ui-react";
import "./App.css";
import modals from "./modals";

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  renderModals() {
    return modals.map((modal) => {
      return (
        <Grid.Row key={modal.reactId}>
          {modal.text}
          <Grid.Column>
            <Modal trigger={
              <Button primary size="massive">
                <Icon name='home' />
                {modal.buttonText}
              </Button>
            } closeIcon>
              <Modal.Content image>
                <Image wrapped size='medium' src={modal.image} alt={modal.imageAltText} />
                <Modal.Description>
                  {modal.modalText}
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Grid.Column>
        </Grid.Row>
      );
    });
  };

  render() {
    return (
      <Fragment>
        <Grid columns={3}>{this.renderModals()}</Grid>
      </Fragment>
    );
  }
}

export default App;
