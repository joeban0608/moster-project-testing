import { shallow, mount, render } from "enzyme";
import React from "react";
import CounterButton2 from "./counter-button-2-component";

it("is render CounterButton component", () => {
  expect(shallow(<CounterButton2 />)).toMatchSnapshot();
});

it("correct increment add counter", () => {
  const wrapper = shallow(<CounterButton2 />);
  wrapper.find(`[id="counter"]`).simulate("click");
  // [ 'Count: ', 1 ]
  expect(wrapper.props().children).toEqual(["Count: ", 1]);
});
