import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchEvents } from "../actions/getEventsAction";
import { Card, Container, Button, Header } from "semantic-ui-react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import EventCard from "./EventCard"

import "../assets/react-big-calendar.css";
import "../assets/eventsList.css";

export class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      time: []
    };
  }

  componentDidMount() {
    if (!this.props.events.length) {
      this.props.fetchEvents();
    }
  }

  componentDidUpdate() {
  }
  render() {
    let events = this.props.events.length ?
      this.props.events : []

    const localizer = BigCalendar.momentLocalizer(moment);
    console.log(events)
    return (
      <Container>
        <div>
          <Header size="huge" className="events-header">
            AgileVentures Events
            <Button
              content="New Event"
              floated="right"
              className="new-event-button"
            />
          </Header>
          <p>
            We are hosting several events a day using Google Hangouts. Feel free
            to join in if you want to get involved or if you are curious about
            Pair Programming and Agile. Each event will have a link to an online
            Hangout prior to start time.
          </p>
        </div>
        <BigCalendar
          className="big-calendar"
          localizer={localizer}
          events={events}
          defaultView={BigCalendar.Views.WEEK}
          step={15}
          timeslots={8}
        />

        {events.map((event, id) => {
          return (
            <EventCard key={id} event={event}>
            </EventCard>
          );
        })}
      </Container>
    );
  }
}
const mapStateToProps = store => ({ events: store.events });
export default connect(
  mapStateToProps,
  { fetchEvents }
)(EventsList);
