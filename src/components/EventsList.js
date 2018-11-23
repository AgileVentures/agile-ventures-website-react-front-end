import React, { Component } from "react";
import { Card, Container } from "semantic-ui-react";
import BigCalendar from "react-big-calendar";
import axios from "axios";
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'



export default class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      time: []
    };
  }

  componentDidMount() {
    //todo remove this when we start using redux
    this.mounted = true;

    axios.get("https://www.agileventures.org/events.json").then(response => {
      console.log(response.data);
      if (this.mounted) {
        this.setState({ events: response.data });
      }
    });
  }

  componentWillUnmount() {
    //todo: remove this when we start using redux
    this.mounted = false;
  }
  render() {
    const localizer = BigCalendar.momentLocalizer(moment) 
    return (
      <Container>
    <BigCalendar
      localizer={localizer}
      events={[{
  title: "tre",
  start: Date.new,
  end: Date.new,
  allDay: true
}]}
      startAccessor="start"
      endAccessor="end"
    />
 
        <Card.Group>
          {this.state.events.map((event, id) => {
            return (
              <Card key={id}>
                <Card.Content>
                  <Card.Header>{event.title}</Card.Header>
                  <Card.Meta>
                  {new Date(event.start).toUTCString()} - {new Date(event.end).toUTCString().substring(17)}
                  </Card.Meta>
                </Card.Content>
              </Card>
            );
          })}
        </Card.Group>
      </Container>
    );
  }
}
