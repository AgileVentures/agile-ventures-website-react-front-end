import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";
import YouTube from "react-youtube";

export default class HangoutCard extends Component {
  youtubeURL(id) {
    return `https://www.youtube.com/watch?v=${id}`;
  }
  render(){
    const { hangout, opts } = this.props;
    return (
      <Card key={hangout.id} >
        <Image>
          <YouTube videoId={hangout.yt_video_id} opts={opts}>
          </YouTube>
        </Image>
        <Card.Content>
          <Card.Header as="h3">{hangout.title}</Card.Header>
          <Card.Meta>{hangout.category}
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <div className='ui two buttons'>
        <a href={hangout.hangout_url} className={"ui button primary"} target="blank">
          Join
        </a>
        <a href={this.youtubeURL(hangout.yt_video_id)} className={"ui button secondary"} target="blank">
          Watch
        </a>
      </div>
    </Card.Content>
  </Card>
    );
  }
}
