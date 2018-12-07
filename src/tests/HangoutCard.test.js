import React from "react";
import { mount, shallow } from "enzyme";
import hangouts from "../fixtures/hangouts"
import HangoutCard from "../components/HangoutCard";

describe("HangoutCard", () => {
  let props;
  const hangout = hangouts[0]

  const hangoutCard = (props) => shallow(<HangoutCard { ...props} />)
  beforeEach(() => {
    props = {
      hangout: {yt_video_id: ""},
      opts: {}
    }
  })

  it("renders the component", () => {
    const hc = hangoutCard(props)
    expect(hc.name()).toEqual("Card");
  })

  it("has a title", () => {
    props.hangout = hangout
    const hc = hangoutCard(props)
    expect(hc.find("CardHeader").shallow().text()).toEqual(hangout.title);
  })

  it("has a category", () => {
    props.hangout = hangout
    const hc = hangoutCard(props)
    expect(hc.find("CardMeta").shallow().text()).toEqual(hangout.category);
  })

  describe("renders buttons", () => {
    it("has 2 buttons", () => {
      const hc = hangoutCard(props)
      const buttons = hc.find(".button")
      expect(buttons.length).toBe(2);
    })
  })
  describe("it has a method youtubeUrl", () => {
    it("genetares youtube Url from given video_id", () => {
      const hl = hangoutCard(props)
      expect(hl.instance().youtubeURL("ADDRESS"))
        .toBe("https://www.youtube.com/watch?v=ADDRESS");
    })
  })
})

