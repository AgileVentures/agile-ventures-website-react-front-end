import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHangouts } from "../actions/getHangoutsAction";
import { Card, Container } from "semantic-ui-react";
import HangoutCard from "./HangoutCard"

class HangoutsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      time: []
    };
  }

  componentDidMount() {
    this.props.fetchHangouts();
    console.log(this.props.hangouts)
  }

  componentDidUpdate() {
    console.log(this.props.hangouts)
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
             <HangoutCard hangout={hangout} opts={videoOpts} />
            );
          })}
      </Card.Group>
    </Container>
    );
  }
}
const mapStateToProps = store => ({ hangouts: store.hangouts });
export default connect( mapStateToProps, { fetchHangouts })(HangoutsList);
