import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Header } from "semantic-ui-react";
import moment from "moment";

export default class EventCard extends Component {
  render(){
    const { event } = this.props
    return (
      <Card fluid className="event-cards">
        <Card.Content>
          <Link to={`/${event.id}`} className="event-title">
            <Card.Header as="h2">{event.title}</Card.Header>
          </Link>
          <Card.Meta>
            {`${moment(event.start).format("MM-DD hh:mm")} -
              ${moment(event.end).format("MM-DD hh:mm")}`}
          </Card.Meta>
        <Card.Description>
          {event.description.substring(0, 120)}
        </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}
