import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHangouts } from "../actions/getHangoutsAction";
import { Card, Container } from "semantic-ui-react";

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
    return (
      <Container>
        <div>
          <h1 className="events-header">
            Hangouts
          </h1>
        </div>

        {this.props.hangouts.map((hangout, id) => {
          return (
            <Card fluid key={id} className="event-cards">
              <Card.Content>
                <Link to={`/${id}`} className="event-title">
                  <big>
                    <Card.Header>{hangout.title}</Card.Header>
                  </big>
                </Link>
                <Card.Meta>
                </Card.Meta>
              </Card.Content>
              <Card.Description>
              </Card.Description>
            </Card>
          );
        })}
      </Container>
    );
  }
}
const mapStateToProps = store => ({ hangouts: store.hangouts });
export default connect( mapStateToProps, { fetchHangouts })(HangoutsList);
