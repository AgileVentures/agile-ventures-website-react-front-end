import React, { Component } from "react";
import PropTypes from "prop-types"
import { Modal, Grid, Button, Image, Icon } from "semantic-ui-react";

export class HomepageModal extends Component {
    render() {
        const { modal, id } = this.props
        return (
            <Grid.Row
                verticalAlign="bottom"
                key={id}
                style={{ height: modal.height }}>
                {modal.text}
                <Grid.Column width={modal.xsOffset}>
                </Grid.Column>
                <Grid.Column width={3}>
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
        )
    }
}

export default HomepageModal

HomepageModal.propTypes = {
    modal: PropTypes.shape({
        buttonText: PropTypes.string.isRequired,
        xsOffset:   PropTypes.number.isRequired,
        height: PropTypes.string.isRequired,
        reactId: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageAltText: PropTypes.string.isRequired,
        imageWidth: PropTypes.string.isRequired,
        modalText: PropTypes.string.isRequired,
    })
}