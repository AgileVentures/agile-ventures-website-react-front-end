import React from "react";
import { shallow, mount } from "enzyme";
import { Homepage } from "../components/Homepage";

describe("Homepage", () => {

  const homepage = (props) => mount(<Homepage />)

  describe("renders the Homepage component", () => {
    it("renders without errors", () => {
      const wrapper = homepage()
      expect(wrapper.name()).toBe("Homepage");
    })

    it("renders 7 row elements", () => {
      const wrapper = homepage()
      expect(wrapper.find(".row").length).toEqual(7)
    })

    it("renders 5 <HomepageModals elements", () => {
      const wrapper = homepage()
      expect(wrapper.find("HomepageModal").length).toEqual(5)
    })
  })
})