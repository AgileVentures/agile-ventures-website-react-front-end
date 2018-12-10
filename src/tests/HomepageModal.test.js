import React from "react";
import { shallow, mount } from "enzyme";
import { HomepageModal } from "../components/HomepageModal";
import homepageModals from '../fixtures/homepageModals';
import { Modal } from "semantic-ui-react";

describe("HomepageModal", () => {
    let modal = homepageModals[0]
    const homepageModal = (props) => mount(<HomepageModal modal={props} />)

    describe("renders the HomepageModal component", () => {
        it("renders without errors", () => {
            const wrapper = homepageModal(modal)
            expect(wrapper.name()).toBe("HomepageModal");
        })

        it("renders a button", () => {
            const wrapper = homepageModal(modal)
            expect(wrapper.find("button").text()).toEqual(modal.buttonText)
        })

    })
})

describe("HomepageModal open", () => {
    let modal = homepageModals[0];
    let homepageModal = (props) => mount(<HomepageModal modal={props} />)
    let wrapper;
    beforeEach(() => {
    })

    describe("renders the HomepageModal component component", () => {
        it("renders without errors", () => {
            wrapper = homepageModal(modal)
            expect(wrapper.find(Modal).length).toBe(1);
        })
    })
})