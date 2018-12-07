import React from "react";
import { shallow, mount } from "enzyme";
import { HangoutsList } from "../components/HangoutsList";
import hangouts from "../fixtures/hangouts"

describe("HangoutList", () => {
  let props;

  const hangoutsList = (props) => mount(<HangoutsList { ...props} />)
  beforeEach(() => {
    props = {
      fetchHangouts: jest.fn(),
      fetchHangoutsPage: jest.fn(),
      hangouts: []
    }
  })


  describe("renders the HangoutsList component", () => {
    it("is the hangouts list", () => {
      const name = hangoutsList(props).name()
      expect(name).toBe("HangoutsList");
    })

    it("has a header", () => {
      const header = hangoutsList(props).find("h1").text()
      expect(header).toBe("Hangouts");
    })

    it("renders 2 HangoutCard components when passed", () => {
      props.hangouts = [...hangouts, ...hangouts]
      const hangoutCards = hangoutsList(props).find("HangoutCard")
      expect(hangoutCards.length).toBe(2);
    })
  })

  describe("state", () => {
    it("has a state key nextPage with the initail value of 2", () => {
      const state = hangoutsList(props).state("nextPage")
      expect(state).toBe(2);
    })

    it("the state key nextPage can be set", () => {
      const updatedState = hangoutsList(props).setState({nextPage: 3});
      expect(updatedState.state("nextPage")).toBe(3);
    })

    it("calls fetchHangouts 1 time when mounted", () => {
      const hl = hangoutsList(props)
      expect(props.fetchHangouts.mock.instances.length).toBe(1);
    })
  })


  describe("renders a button to get more hangouts", () => {
    it("has text on the button", () => {
      const buttonText = hangoutsList(props).find("Button").text()
      expect(buttonText).toBe("Load page 2");
    })

    it("updates the state and button when clicked", () => {
      const hl = hangoutsList(props)
      expect(hl.state("nextPage")).toBe(2);
      hl.find("Button").simulate('click');
      expect(hl.state("nextPage")).toBe(3);
      expect(hl.find("Button").text()).toBe("Load page 3");
    })

    it("calls fetchHangoutsPage with the next page number when button clicked", () => {
      const hl = hangoutsList(props)
      expect(props.fetchHangoutsPage.mock.instances.length).toBe(0);
      hl.find("Button").simulate('click')
      expect(props.fetchHangoutsPage.mock.instances.length).toBe(1);
      expect(props.fetchHangoutsPage.mock.calls[0][0]).toBe(2);

      hl.find("Button").simulate('click')
      expect(props.fetchHangoutsPage.mock.instances.length).toBe(2);
      expect(props.fetchHangoutsPage.mock.calls[1][0]).toBe(3);
    })
  })

  describe("it has a method loadNextPage", () => {
    it("updates the state when called", () => {
      const hl = hangoutsList(props)
      expect(hl.state("nextPage")).toBe(2);
      hl.instance().loadNextPage()
      expect(hl.state("nextPage")).toBe(3);
    })

    it("calls fetchHangoutsPage when invoked with the nextState state", () => {
      const hl = hangoutsList(props)
      expect(props.fetchHangoutsPage.mock.instances.length).toBe(0);

      hl.instance().loadNextPage()
      expect(props.fetchHangoutsPage.mock.instances.length).toBe(1);
      expect(props.fetchHangoutsPage.mock.calls[0][0]).toBe(2);
    })
  })
})
