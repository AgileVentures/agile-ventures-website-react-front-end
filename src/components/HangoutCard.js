import React, { Component } from "react";
import { Link } from "react-router-dom";
import { fetchHangouts } from "../actions/getHangoutsAction";
import { Card, Container, Image } from "semantic-ui-react";
import YouTube from "react-youtube";

export default class HangoutCard extends Component {
  render(){
    const { hangout, opts } = this.props
    return (
      <Card key={hangout.id} >
        <Image>
          <YouTube videoId={hangout.yt_video_id} opts={opts}/>
        </Image>
        <Card.Content>
          <Link to={`/${hangout.id}`}>
            <Card.Header>{hangout.title}</Card.Header>
          </Link>
          <Card.Meta>
            {hangout.category}
      </Card.Meta>
    </Card.Content>
    <Card.Description>
    </Card.Description>
      </Card>
    )
  }
}
