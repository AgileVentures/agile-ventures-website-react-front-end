import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHangouts, fetchHangoutsPage } from "../actions/getHangoutsAction";
import { Button, Card, Container } from "semantic-ui-react";
import HangoutCard from "./HangoutCard"

export class HangoutsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
			nextPage: 2,
    };
  }

  componentDidMount() {
    this.props.fetchHangouts();
  }

  loadNextPage = () => {
    this.props.fetchHangoutsPage(this.state.nextPage);
    this.setState(state => ({ nextPage: state.nextPage + 1}));
  }

  render() {
    const videoOpts = {
      height: '150',
      width: '290',
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <Container>
        <div>
          <h1 className="events-header">
            Hangouts
          </h1>
        </div>
        <Card.Group>
          {this.props.hangouts.map((hangout, id) => {
            return (
              <HangoutCard key={id} hangout={hangout} opts={videoOpts} />
            );
          })}
      </Card.Group>
      <Button color="blue" onClick={this.loadNextPage} >Load page {this.state.nextPage}</Button>
    </Container>
    );
  }
}
const mapStateToProps = store => ({ hangouts: store.hangouts });
export default connect( mapStateToProps, { fetchHangouts, fetchHangoutsPage })(HangoutsList);
