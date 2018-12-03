import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import YouTube from "react-youtube";

export default class HangoutCard extends Component {
  youtubeURL(id) {
    return `https://www.youtube.com/watch?v=${id}`
  }
  render(){
    const { hangout, opts } = this.props
    return (
      <Card key={hangout.id} >
        <Image>
          <YouTube videoId={hangout.yt_video_id} opts={opts}>
          </YouTube>
        </Image>
        <Card.Content>
          <Card.Header>{hangout.title}</Card.Header>
          <Card.Meta> {hangout.category}
          </Card.Meta>
        </Card.Content>
        <Card.Description>
          <Button.Group floated="right">
          <a href={hangout.hangout_url}>
            <Button primary >Join</Button>
          </a>
          <a href={this.youtubeURL(hangout.yt_video_id)}>
            <Button secondary>Watch</Button>
          </a>
        </Button.Group>
        </Card.Description>
      </Card>
    )
  }
}
